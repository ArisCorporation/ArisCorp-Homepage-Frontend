import Layout from '../layout'
import {
  GET_GAMEPLAYS,
  INTERNAL_GET_MEMBER_HANGAR,
  INTERNAL_GET_Ships_MY_HANGAR,
} from 'graphql/queries'
import client from 'apollo/clients'
import { useEffect, useState } from 'react'
import SelectionGridWrapper from 'components/SelectionGridWrapper'
import HangarShipCard from 'components/internal/HangarShipCard'
import { BasicPanelButton } from 'components/panels'
import Dropdown from 'components/Dropdown'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const { member } = context.query

  const { data: shipList } = await client.query({
    query: INTERNAL_GET_Ships_MY_HANGAR,
  })
  const { data: rawData } = await client.query({
    query: INTERNAL_GET_MEMBER_HANGAR,
    variables: { member },
  })
  const { data: gameplayData } = await client.query({ query: GET_GAMEPLAYS })

  const data = {
    member: { ...rawData.member[0] },
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
        active_module: obj.active_module,
        planned: obj.planned,
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

  const siteTitle = `${data.member.title ? data.member.title + " " : ""}${data.member.firstname} ${data.member.lastname} - ArisCorp Management System`

  return {
    props: {
      apiData: data,
      shipList: shipList.ships,
      departments: gameplayData.gameplays,
      siteTitle,
    },
  }
}

export default function InternalIndex({
  apiData,
  shipList,
  departments,
  siteTitle,
}) {
  const { query, replace } = useRouter()
  const departmentquery = query.department
  const [detailView, setDetailView] = useState()
  const [loanerView, setLoanerView] = useState()
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [data, setData] = useState(apiData)

  function changeDepartment(dep) {
    setSelectedDepartment(dep)
    replace(
      { query: { member: query.member, department: dep?.gameplay_name } },
      undefined,
      {
        scroll: false,
      }
    )
  }

  function filterData() {
    let Data = { ...data, ships: [...apiData.ships] }
    let filteredData = [...apiData.ships]
    if (selectedDepartment != null) {
      filteredData = filteredData.filter(
        (e) =>
          e.custom_data.department?.gameplay_name ==
          selectedDepartment.gameplay_name
      )
    }
    if (loanerView) {
      console.log('filteredData', filteredData)
      const loanerViewShips = [
        ...filteredData.filter(
          (e) => e.ship.productionStatus == 'flight-ready'
        ),
      ]
      filteredData
        .filter((e) => e.ship.productionStatus != 'flight-ready')
        ?.forEach((obj) => {
          obj.ship?.loaners?.forEach((i) => {
            loanerViewShips.push(shipList.find((e) => e.id == i.id))
          })
        })
      filteredData = loanerViewShips.sort((a, b) =>
        (a.ship?.name || a.name).localeCompare(b.ship?.name || b.name)
      )
    }
    Data.ships = [...filteredData]
    setData(Data)
  }

  useEffect(() => {
    // INITIAL STATES

    // LOCAL STORAGE
    const detailViewValue = window.localStorage.getItem('fleetDetailView')
    if (detailViewValue != null && detailViewValue != 'undefined') {
      setDetailView(JSON.parse(detailViewValue))
    }
    const loanerViewValue = window.localStorage.getItem('fleetLoanerView')
    if (loanerViewValue != null && loanerViewValue != 'undefined') {
      setDetailView(JSON.parse(loanerViewValue))
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
    // LOCAL STORAGE
    window.localStorage.setItem('hangarLoanerView', JSON.stringify(loanerView))
  }, [loanerView])

  useEffect(() => {
    // FILTER DATA
    setData([])
    setTimeout(() => {
      filterData()
    }, 800)
  }, [selectedDepartment, loanerView])

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div className="flex flex-wrap px-2 my-4 gap-y-4">
        <div className="flex flex-wrap gap-4 w-fit">
          <div className="w-[200px]">
            <Dropdown
              changeAction={changeDepartment}
              mode="departments"
              animate
              items={departments}
              state={selectedDepartment}
              bg={'[#222]'}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 ml-auto">
          <div className="">
            <BasicPanelButton
              animate
              onClick={() => setDetailView(!detailView)}
            >
              <p className="p-0">
                Detail Ansicht: {detailView ? 'Ausschalten' : 'Anschalten'}
              </p>
            </BasicPanelButton>
          </div>
          <div className="">
            <BasicPanelButton
              animate
              onClick={() => setLoanerView(!loanerView)}
            >
              <p className="p-0">
                Leihschiff-Ansicht: {loanerView ? 'Ausschalten' : 'Anschalten'}
              </p>
            </BasicPanelButton>
          </div>
        </div>
      </div>
      <SelectionGridWrapper>
        <AnimatePresence>
          {data.ships?.map((object) => (
            <motion.div
              key={object.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <HangarShipCard
                color={
                  !loanerView
                    ? object.custom_data?.group == 'private'
                      ? 'white'
                      : object.custom_data?.group == 'ariscorp' &&
                        object.custom_data?.department
                      ? 'primary'
                      : object.custom_data?.group == 'ariscorp' &&
                        !object.custom_data?.department
                      ? 'secondary'
                      : null
                    : null
                }
                hangarView
                detailView={detailView}
                data={object}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </SelectionGridWrapper>
    </Layout>
  )
}
