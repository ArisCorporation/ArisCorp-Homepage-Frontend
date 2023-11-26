import Layout from './layout'
import {
  GET_GAMEPLAYS,
  GET_MEMBERS,
  INTERNAL_GET_FLEET,
  INTERNAL_GET_Ships_MY_HANGAR,
} from 'graphql/queries'
import client from 'apollo/clients'
import { useEffect, useState } from 'react'
import SelectionGridWrapper from 'components/SelectionGridWrapper'
import HangarShipCard from 'components/internal/HangarShipCard'
import { BasicPanelButton } from 'components/panels'
import Head from 'next/head'
import Dropdown from 'components/Dropdown'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Modal from 'components/modal'
import DefaultButton from 'components/DefaultButton'

export async function getServerSideProps() {
  const { data: shipList } = await client.query({
    query: INTERNAL_GET_Ships_MY_HANGAR,
  })
  const { data: rawData } = await client.query({ query: INTERNAL_GET_FLEET })
  const { data: rawMemberData } = await client.query({ query: GET_MEMBERS })
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
        department: obj.department,
        active_module: obj.active_module,
        planned: obj.planned,
      },
    }
    data.push(item)
  })

  const siteTitle = 'ArisCorp Flotte - ArisCorp Management System'

  return {
    props: {
      apiData: data,
      shipList: shipList.ships,
      memberList: rawMemberData.member,
      departments: gameplayData.gameplays,
      siteTitle,
    },
  }
}

export default function InternalIndex({
  apiData,
  shipList,
  memberList,
  departments,
  siteTitle,
}) {
  const { query, replace } = useRouter()
  const departmentquery = query.department
  const memberquery = query.member
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [selectedMember, setSelectedMember] = useState()
  const [detailView, setDetailView] = useState()
  const [loanerView, setLoanerView] = useState()
  const [modal, setModal] = useState(false)
  const [modalType, setModalType] = useState()
  const [data, setData] = useState(apiData)

  function changeDepartment(dep) {
    setSelectedDepartment(dep)
    replace(
      { query: { department: dep?.gameplay_name, member: memberquery } },
      undefined,
      {
        scroll: false,
      }
    )
  }
  function changeMember(mem) {
    setSelectedMember(mem)
    replace(
      { query: { department: departmentquery, member: mem?.slug } },
      undefined,
      {
        scroll: false,
      }
    )
  }

  function filterData() {
    let filteredData = apiData
    if (selectedDepartment != null) {
      filteredData = filteredData.filter(
        (e) =>
          e.custom_data.department?.gameplay_name ==
          selectedDepartment.gameplay_name
      )
    }
    if (selectedMember != null) {
      filteredData = filteredData.filter(
        (e) => e.member?.slug == selectedMember.slug
      )
    }
    // console.log('loanerView1', filteredData)
    if (loanerView == true) {
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
    // console.log('loanerView2', filteredData)
    setData(filteredData)
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
      setLoanerView(JSON.parse(loanerViewValue))
    }

    // DEPARTMENT
    setSelectedDepartment(
      departments.find((e) => e.gameplay_name == departmentquery)
    )

    // MEMBERS
    setSelectedMember(memberList.find((e) => e.slug == memberquery))

    filterData()
  }, [])

  useEffect(() => {
    // STATE UPDATES

    // LOCAL STORAGE
    window.localStorage.setItem('fleetDetailView', JSON.stringify(detailView))
  }, [detailView])

  useEffect(() => {
    // LOCAL STORAGE
    window.localStorage.setItem('fleetLoanerView', JSON.stringify(loanerView))
  }, [loanerView])

  useEffect(() => {
    // FILTER DATA
    setData([])
    setTimeout(() => {
      filterData()
    }, 800)
  }, [selectedDepartment, selectedMember, loanerView])

  function openHelpModal() {
    setModalType('help')
    setModal(true)
  }
  function closeModal() {
    setModal(false)
    setTimeout(() => {
      setModalType('')
    }, 600)
  }

  return (
    <Layout helpAction={openHelpModal}>
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <Modal
        state={modal}
        setState={setModal}
        title={modalType == 'help' && 'Hilfe:'}
        closeFunction={closeModal}
        wxxl={modalType == 'help' ? true : false}
      >
        <div className="mb-2">
          {modalType == 'help' && (
            <div className="px-8">
              <div>
                <div>
                  <p>Hier kannst du die ArisCorp-Flotte ansehen.</p>
                  <p>Falls du nach Abteilung oder Mitarbeiter filtern möchtest, klicke einfach auf das jeweilige Dropdown-Menü.</p>
                  <p>Wenn du Detailiertere Informationen anschauen möchtest, klicke einfach auf Detail Ansicht.</p>
                  <p>Falls du nur Schiffe sehen möchtest, die jederzeit im Spiel abrufbar sind, schalte einfach die Leihschiff-Ansicht an.</p>
                </div>
              </div>
              <div className="w-full mt-8 space-x-12">
                <DefaultButton animate danger action={() => closeModal()}>
                  Schließen!
                </DefaultButton>
              </div>
            </div>
          )}
        </div>
      </Modal>
      <div className="w-full h-full">
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
            <div className="w-[200px]">
              <Dropdown
                changeAction={changeMember}
                mode="member"
                animate
                items={memberList}
                state={selectedMember}
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
                  Leihschiff-Ansicht:{' '}
                  {loanerView ? 'Ausschalten' : 'Anschalten'}
                </p>
              </BasicPanelButton>
            </div>
          </div>
        </div>
        <SelectionGridWrapper>
          <AnimatePresence>
            {data[0] &&
              data.map((object, i) => (
                <motion.div
                  key={object.id + i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <HangarShipCard
                    fleetView={!loanerView}
                    detailView={detailView}
                    data={object}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </SelectionGridWrapper>
        {!data[0] && (
          <h2 className="text-center">
            Keine Schiffe mit den aktuellen Kriterien vorhanden.
          </h2>
        )}
      </div>
    </Layout>
  )
}
