import Layout from "./layout"
import { GET_GAMEPLAYS, INTERNAL_GET_FLEET } from 'graphql/queries'
import client from 'apollo/clients';
import { useEffect, useState } from 'react';
import SelectionGridWrapper from 'components/SelectionGridWrapper';
import HangarShipCard from 'components/internal/HangarShipCard';
import { BasicPanelButton } from 'components/panels';
import Head from 'next/head';
import Dropdown from 'components/Dropdown';
import { useRouter } from 'next/router';
import { AnimatePresence, useInView, motion } from "framer-motion";

export async function getServerSideProps () {
  const { data: rawData } = await client.query({ query: INTERNAL_GET_FLEET })
  const { data: gameplayData } = await client.query({ query: GET_GAMEPLAYS })

  if (!rawData?.member_ships) {
    return {
      notFound: true,
    }
  }

  const data = []
  rawData.member_ships.forEach((obj) => {
    const item = {
      id: obj.id,
      ship: obj.ships_id,
      member: obj.member_id,
      custom_data: {
        name: obj.name,
        serial: obj.serial,
        group: obj.group,
        visibility: obj.visibility,
        department: obj.department
      }
    }
    data.push(item)
  })

  const siteTitle = "My Hangar - ArisCorp Management System"

  return {
    props: {
      apiData: data,
      departments: gameplayData.gameplays,
      siteTitle
    },
  }
}

export default function InternalIndex ({ apiData, departments, siteTitle }) {
  const { query, replace } = useRouter()
  const departmentquery = query.department
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [detailView, setDetailView] = useState()
  const [data, setData] = useState(apiData)

  function changeDepartment (dep) {
    setSelectedDepartment(dep?.gameplay_name)
    replace(
      { query: { department: dep?.gameplay_name } },
      undefined,
      {
        scroll: false,
      }
    )
  }

  useEffect(() => {
    // INITIAL STATES

    // LOCAL STORAGE
    const viewValue = window.localStorage.getItem("fleetDetailView")
    if (viewValue != null && viewValue != "undefined") { setDetailView(JSON.parse(viewValue)) }

    // DEPARTMENT
    setSelectedDepartment(departmentquery)
  }, [])

  useEffect(() => {
    // STATE UPDATES

    // LOCAL STORAGE
    window.localStorage.setItem("fleetDetailView", JSON.stringify(detailView))
  }, [detailView, selectedDepartment])

  useEffect(() => {
    // FILTER DATA
    setData([])
    setTimeout(() => {
      if (selectedDepartment != null && selectedDepartment != "undefined" && selectedDepartment != "") {
        console.log("selectedDepartment", selectedDepartment)
        const filteredData = apiData.filter(e => e.custom_data.department?.gameplay_name == selectedDepartment)
        setData(filteredData)
      } else {
        setData(apiData)
      }
    }, 800);
  }, [selectedDepartment])

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <div className='w-full h-full'>
        <div className='flex px-2 my-4'>
          <div className='w-1/4'>
            <Dropdown changeAction={changeDepartment} mode="departments" animate items={departments} state={selectedDepartment} bg={"[#222]"} />
          </div>
          <div className='ml-auto'>
            <BasicPanelButton animate onClick={() => setDetailView(!detailView)}>
              <p className="p-0">Detail View: {detailView ? "Ausschalten" : "Anschalten"}</p>
            </BasicPanelButton>
          </div>
        </div>
        <SelectionGridWrapper>
          <AnimatePresence>
            {data.map((object) => (
              <motion.div key={object.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} exit={{ opacity: 0 }}>
                <HangarShipCard fleetView detailView={detailView} data={object} />
              </motion.div>
            ))}
          </AnimatePresence>
        </SelectionGridWrapper>
      </div>
    </Layout>
  )
}