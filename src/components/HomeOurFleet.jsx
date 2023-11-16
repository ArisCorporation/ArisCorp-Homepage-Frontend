import { useEffect, useState } from 'react'
import { SquareLoader } from 'react-spinners'
import SelectionGridWrapper from './SelectionGridWrapper'
import { motion, AnimatePresence } from 'framer-motion'
import { GET_GAMEPLAYS, INTERNAL_GET_FLEET } from 'graphql/queries'
import { useQuery } from '@apollo/client'
import HangarShipDetailCard from './internal/HangarShipCard'
import { BasicPanelButton } from './panels'
import Dropdown from './Dropdown'
import { useRouter } from 'next/router'

export default function OurFleet () {
  const { replace, query } = useRouter()
  const { data: rawGameplayData } = useQuery(GET_GAMEPLAYS)
  const { data: rawData, loading, error } = useQuery(INTERNAL_GET_FLEET)
  const [detailView, setDetailView] = useState()
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [departments, setDepartments] = useState([])
  const [apiData, setApiData] = useState([])
  const [data, setData] = useState([])


  function changeDepartment (dep) {
    setSelectedDepartment(dep?.gameplay_name)
    replace(
      { query: { about: query.about, our: query.our, department: dep?.gameplay_name } },
      undefined,
      {
        scroll: false,
      }
    )
  }

  useEffect(() => {
    if (rawData) {
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
        apiData.push(item)
      })
      setApiData(apiData)
      setData(apiData)
    }
  }, [rawData])
  useEffect(() => {
    if (rawGameplayData) {
      setDepartments(rawGameplayData.gameplays)
    }
  }, [rawGameplayData])

  useEffect(() => {
    // INITIAL STATES

    // LOCAL STORAGE
    const viewValue = window.localStorage.getItem("homeFleetDetailView")
    if (viewValue != null && viewValue != "undefined") { setDetailView(JSON.parse(viewValue)) }

    // DEPARTMENT
    if(query.department){
      setSelectedDepartment(query.department)
    }
    // setSelectedDepartment(departmentquery)
  }, [])

  useEffect(() => {
    // STATE UPDATES

    // LOCAL STORAGE
    window.localStorage.setItem("homeFleetDetailView", JSON.stringify(detailView))
  }, [detailView])

  useEffect(() => {
    // FILTER DATA
    setData([])
    setTimeout(() => {
      if (selectedDepartment != null && selectedDepartment != "undefined" && selectedDepartment != "") {
        const filteredData = apiData.filter(e => e.custom_data.department?.gameplay_name == selectedDepartment)
        setData(filteredData)
      } else {
        setData(apiData)
      }
    }, 800);
  }, [selectedDepartment])

  if (error) return <p>Error :(</p>

  if (loading) {
    return (
      <div id="fleet" className="flex justify-center pt-10">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )
  }
  
  return (
    <>
      <h1 className="text-center text-primary">Flotte der ArisCorp</h1>
      <p className='text-center'>Die Flotte der ArisCorp stellt sich aus den Schiffen zusammen, die von Mitgliedern der ArisCorp zur verfügung gestellt werden.</p>
      <h2 className='mt-4 text-center'>Aktuelle Ansicht: {selectedDepartment ? (<span className='text-secondary'>Abteilung - {selectedDepartment}</span>) : (<span className='text-primary'>Komplette Flotte</span>)}</h2>
      <div>
        <div className="flex w-full mt-4 mb-2">
          <div className='w-1/4'>
            <Dropdown changeAction={changeDepartment} mode="departments" withImages animate items={departments} state={selectedDepartment} bg={"[#222]"} />
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
                <HangarShipDetailCard fleetView detailView={detailView} data={object} />
              </motion.div>
            ))}
          </AnimatePresence>
        </SelectionGridWrapper>
      </div>
    </>
  )
}