import { useSession } from 'next-auth/react'
import Layout from '../layout'
import { gql, useQuery } from '@apollo/client'
import {
  GET_GAMEPLAYS,
  INTERNAL_GET_MEMBER_HANGAR,
  INTERNAL_GET_Ships_MY_HANGAR,
} from 'graphql/queries'
import client from 'apollo/clients'
import { Fragment, useEffect, useRef, useState } from 'react'
import SelectionGridWrapper from 'components/SelectionGridWrapper'
import HangarShipCard from 'components/internal/HangarShipCard'
import { BasicPanel, BasicPanelButton } from 'components/panels'
import { Dialog, Transition } from '@headlessui/react'
import Modal from 'components/modal'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import MultipleCombobox from 'components/MultipleCombobox'
import Checkbox from 'components/Checkbox'
import Dropdown from 'components/Dropdown'
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/20/solid'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FiPlusCircle } from 'react-icons/fi'
import RadioButton from 'components/RadioButton'
import { BsTrash, BsTrash3 } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import DefaultButton from 'components/DefaultButton'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const { member } = context.query

  const { data: rawData } = await client.query({
    query: INTERNAL_GET_MEMBER_HANGAR,
    variables: { member },
  })
  const { data: gameplayData } = await client.query({ query: GET_GAMEPLAYS })
  
  const data = {
    member: {...rawData.member[0]},
    ships: [],
  }
  delete data.member.ships

  rawData.member[0]?.ships?.forEach((obj) => {
    const item = {
      id: obj.id,
      ship: obj.ships_id,
      custom_data: {
        name: obj.name,
        serial: obj.serial,
        group: obj.group,
        visibility: obj.visibility,
        department: obj.department,
      },
    }
    data.ships.push(item)
    return null
  })

  if (!data.member?.firstname) {
    return {
      notFound: true,
    }
  }

  // const siteTitle = `${data.member.title ? data.member.title + " " : ""}${data.member.firstname} ${data.member.lastname} - ArisCorp Management System`
  const siteTitle = `ArisCorp Management System`

  return {
    props: {
      apiData: data,
      raw: rawData,
      departments: gameplayData.gameplays,
      siteTitle,
    },
  }
}

export default function InternalIndex({ apiData, raw, departments, siteTitle }) {
  const { query, replace } = useRouter()
  const departmentquery = query.department
  const [detailView, setDetailView] = useState()
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [data, setData] = useState(apiData)
  console.log(raw)

  function changeDepartment(dep) {
    setSelectedDepartment(dep)
    replace({ query: { member: query.member, department: dep?.gameplay_name } }, undefined, {
      scroll: false,
    })
  }

  function filterData() {
    if (selectedDepartment != null) {
      let filteredData = [...apiData.ships]
      filteredData = filteredData.filter(
        (e) => e.custom_data.department?.gameplay_name == selectedDepartment.gameplay_name
      )
      setData({ ...data, ships: [...filteredData] })
    } else {
      setData(apiData)
    }
  }

  useEffect(() => {
    // INITIAL STATES

    // LOCAL STORAGE
    const viewValue = window.localStorage.getItem('hangarDetailView')
    if (viewValue != null && viewValue != 'undefined') {
      setDetailView(JSON.parse(viewValue))
    }

    // DEPARTMENT
    setSelectedDepartment(
      departments.find((e) => e.gameplay_name == departmentquery)
    )
    filterData()
  }, [])

  useEffect(() => {
    // STATE UPDATES

    // LOCAL STORAGE
    window.localStorage.setItem('hangarDetailView', JSON.stringify(detailView))
  }, [detailView])

  useEffect(() => {
    // FILTER DATA
    setTimeout(() => {
      filterData()
    }, 800)
  }, [selectedDepartment])

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div className="flex px-2 my-4">
        <div className="min-w-[200px] w-full max-w-[25%]">
          <Dropdown
            changeAction={changeDepartment}
            mode="departments"
            animate
            items={departments}
            state={selectedDepartment}
            bg={'[#222]'}
          />
        </div>
        <div className="ml-auto">
          <BasicPanelButton animate onClick={() => setDetailView(!detailView)}>
            <p className="p-0">
              Detail View: {detailView ? 'Ausschalten' : 'Anschalten'}
            </p>
          </BasicPanelButton>
        </div>
      </div>
      <SelectionGridWrapper>
        <AnimatePresence>
          {data.ships?.map((object) => (
              <motion.div key={object.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} exit={{ opacity: 0 }}>
                <HangarShipCard detailView={detailView} data={object} />
              </motion.div>
            ))}
        </AnimatePresence>
      </SelectionGridWrapper>
    </Layout>
  )
}
