import { useSession } from 'next-auth/react'
import Layout from "./layout"
import { gql, useQuery } from '@apollo/client'
import { GET_GAMEPLAYS, GET_INTERNAL_ADMIN_DATA, GET_MEMBERS, INTERNAL_GET_Ships_MY_HANGAR } from 'graphql/queries'
import client from 'apollo/clients';
import { Fragment, useEffect, useRef, useState } from 'react';
import SelectionGridWrapper from 'components/SelectionGridWrapper';
import HangarShipCard from 'components/internal/HangarShipCard';
import { BasicPanel, BasicPanelButton } from 'components/panels';
import { Dialog, Tab, Transition } from '@headlessui/react';
import Modal from 'components/modal';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import MultipleCombobox from 'components/multipleCombobox';
import Checkbox from 'components/Checkbox';
import Dropdown from 'components/Dropdown';
import { DocumentIcon, GlobeEuropeAfricaIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/20/solid';
import { AiOutlinePlus, AiOutlinePlusCircle } from 'react-icons/ai';
import { FiPlusCircle } from 'react-icons/fi';
import RadioButton from 'components/RadioButton';
import { BsTrash, BsTrash3 } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { SiDiscover } from 'react-icons/si';
import DefaultButton from 'components/defaultButton';
import { useRouter } from 'next/router';

function slugify (str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

function slugify_dot (str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '.') // collapse whitespace and replace by -
    .replace(/-+/g, '.') // collapse dashes

  return str
}

export async function getServerSideProps () {
  const { data: rawData } = await client.query({ query: GET_INTERNAL_ADMIN_DATA })
  const { data: gameplayData } = await client.query({ query: GET_GAMEPLAYS })

  const memberData = []
  rawData.member.map((obj) => {
    const roles = [...obj.member_rollen.sort()]
    const item = {
      ...obj,
      department: obj.department[0] ? obj.department[0] : null,
      head_department: obj.head_department[0] ? obj.head_department[0] : null,
      member_rollen: roles
    }

    memberData.push(item)
  })

  const siteTitle = "ADMIN - ArisCorp Management System"

  return {
    props: {
      memberApiList: memberData,
      departments: gameplayData.gameplays,
      siteTitle
    },
  }
}

export default function InternalIndex ({ shipList, siteTitle, memberApiList, departments }) {
  const { data: session, status: sessionStatus } = useSession()
  const authorized = sessionStatus === 'authenticated';
  const [userData, setUserData] = useState()
  const { replace, query, push } = useRouter()
  const [authenticationChecked, setAuthenticationChecked] = useState(false)
  const checkRole = async (id) => {
    const data = await fetch(
      "https://cms.ariscorp.de/users?filter[id]=" + id + "&access_token=" + process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: "GET"
      }
    ).then((res) => res.json());

    return setUserData(data.data[0])
  }
  useEffect(() => {
    if (authorized == true && session.user.id) {
      if (session.user.role == "767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb" || session.user.role == "6d6f549e-5650-4de9-b12a-06dac9d113a6") {
        return
      } else if (session.user.role != "767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb" || session.user.role != "6d6f549e-5650-4de9-b12a-06dac9d113a6") {
        push({
          pathname: '/internal'
        });
      }
    }
  }, [session, authorized, userData, sessionStatus])
  const [Data, setData] = useState()
  const [member, setMember] = useState("")
  const [detailView, setDetailView] = useState()
  const [modal, setModal] = useState(false)
  const [modalType, setModalType] = useState("")
  const [modalStore, setModalStore] = useState()
  const [memberFirstname, setMemberFirstname] = useState()
  const [memberLastname, setMemberLastname] = useState()
  const [memberTitle, setMemberTitle] = useState()
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [selectedStatus, setSelectedStatus] = useState()
  const [selectedRole, setSelectedRole] = useState()
  const [abteilungsLeiter, setAbteilungsleiter] = useState()
  const [memberCheckbox, setMemberCheckbox] = useState()
  const [recruitingCheckbox, setRecruitingCheckbox] = useState()
  const [marketingCheckbox, setMarketingCheckbox] = useState()
  const [adminsitrationCheckbox, setAdministrationCheckbox] = useState()
  const [passwordReset, setPasswordReset] = useState()
  const [memberPassword, setMemberPassword] = useState()
  const [memberList, setMemberList] = useState(memberApiList)
  const [activeTab, setActiveTab] = useState(0)
  const tabquery = query.tab

  const tabs = [
    {
      name: "Mitgliederverwaltung",
      content: (
        <>
          <div>
            <div className='w-full'>
              <table className='w-full overflow-hidden text-sm text-left text-gray-500 table-auto dark:text-gray-400 rounded-xl'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th className='px-6 py-3'>Status</th>
                    <th className='w-12 px-6 py-3'></th>
                    <th className='px-6 py-3'>Name</th>
                    <th className='px-6 py-3'>Abteilung</th>
                    <th className='px-6 py-3'><span></span></th>
                    <th onClick={() => openAddModal()} className='px-6 py-1 text-center text-green-400 transition-all duration-200 opacity-50 cursor-pointer hover:duration-300 hover:opacity-100'><AiOutlinePlus className='w-5 h-5' /></th>
                  </tr>
                </thead>
                <tbody>
                  {memberList.map((member) => (
                    <tr key={member.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                      <td className={'px-6 py-4 flex justify-center' + (member.status == "draft" ? " text-white" : "") + (member.status == "published" ? " text-green-500" : "")}>
                        {member.status == "draft" && <DocumentIcon className='w-6 h-6 my-auto' />}
                        {member.status == "published" && <GlobeEuropeAfricaIcon className='w-6 h-6 my-auto' />}
                      </td>
                      <td className='px-6 py-2'>
                        <div className='w-12 h-12 bg-top bg-no-repeat bg-cover rounded-full' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${member.member_potrait.id}?height=400)` }}></div>
                      </td>
                      <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{member.title} {member.firstname} {member.lastname}</th>
                      <td className='px-6 py-4'>Exploration</td>
                      <td className='flex px-6 py-4 space-x-4'>
                        <div onClick={() => openEditModal(member)} className='font-medium text-center transition-all duration-200 opacity-50 cursor-pointer hover:opacity-100 text-primary hover:duration-300'>Edit</div>
                        <div onClick={() => openRemoveModal(member)} className='font-medium text-center text-red-500 transition-all duration-200 opacity-50 cursor-pointer hover:opacity-100 hover:duration-300'><BsTrash className='w-5 h-5' /></div>
                      </td>
                      <td className='px-6 py-4'></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )
    },
    {
      name: "Hangarverwaltung",
      content: (<></>)
    },
  ]

  const roles = [
    {
      id: "a74700bc-7e32-4597-a1e1-34c6d7674dad",
      name: "Mitglied"
    },
    {
      id: "4421bd05-d49f-4abe-a92e-9c0fb606e6f0",
      name: "Content Writer"
    },
    {
      id: "6d6f549e-5650-4de9-b12a-06dac9d113a6",
      name: "Verwaltung"
    },
    {
      id: "767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb",
      name: "Administrator"
    }
  ]

  useEffect(() => {
    if (tabquery != null && tabquery != '') {
      setActiveTab(tabquery)
    } else {
      setActiveTab(0)
    }
  }, [tabquery])


  const updateMembers = async () => {
    let rawData = await fetch(
      // "https://cms.ariscorp.de/items/member_ships?fields=*.*&filter[member_id]=" + session.user.id,
      "https://cms.ariscorp.de/items/member?fields=*,member_potrait.id,head_department.id,head_department.gameplay_name,department.id,department.gameplay_name,account.id,account.role&filter[status][_neq]=archived&sort=firstname&access_token=" + process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: "GET"
      }
    ).then((res) => res.json());
    const data = []
    rawData.data.map((obj) => {
      const roles = [...obj.member_rollen.sort()]
      const item = {
        ...obj,
        department: obj.department[0] ? obj.department[0] : null,
        head_department: obj.head_department[0] ? obj.head_department[0] : null,
        member_rollen: roles
      }

      data.push(item)
    })

    setMemberList(data)
    return console.log("MEMBER UPDATED!")
  }

  const addMember = async () => {
    const roles = []
    if (adminsitrationCheckbox) roles.push("administration")
    if (marketingCheckbox) roles.push("marketing")
    if (memberCheckbox) roles.push("member")
    if (recruitingCheckbox) roles.push("recruitment")

    const memberObject = {
      status: selectedStatus,
      firstname: memberFirstname,
      lastname: memberLastname,
      title: memberTitle,
      slug: slugify(memberFirstname + " " + memberLastname),
      member_rollen: roles,
      head_of_department: abteilungsLeiter,
      head_department: (abteilungsLeiter ? [selectedDepartment] : []),
      department: (!abteilungsLeiter ? [selectedDepartment] : []),
    }

    const accountObject = {
      first_name: memberFirstname,
      last_name: memberLastname,
      title: memberTitle,
      email: (`${slugify_dot(memberFirstname)}.${slugify_dot(memberLastname)}@ariscorp.de`),
      password: (`${slugify_dot(memberFirstname)}.${slugify_dot(memberLastname)}`),
      passwordMustChange: (memberPassword ? false : true),
      role: (selectedRole ? selectedRole.id : (abteilungsLeiter ? "767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb" : "a74700bc-7e32-4597-a1e1-34c6d7674dad")),
    }

    const createdAccount = await fetch(
      "https://cms.ariscorp.de/users?access_token=" + process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: "POST",
        body: JSON.stringify(accountObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json())

    memberObject.account = createdAccount.data.id

    await fetch(
      "https://cms.ariscorp.de/items/member?access_token=" + process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: "POST",
        body: JSON.stringify(memberObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    closeModal()
    return updateMembers()
  }

  async function editMember (edits, id, accId) {
    const accountEdits = {}
    if (edits.firstname) accountEdits.first_name = edits.firstname
    if (edits.lastname) accountEdits.last_name = edits.lastname
    if (edits.title) accountEdits.title = edits.title
    if (edits.firstname || edits.lastname) accountEdits.email = (`${slugify_dot(edits.firstname || slugify_dot(memberFirstname))}.${edits.lastname || slugify_dot(memberLastname)}@ariscorp.de`)
    if (edits.account?.role || edits.head_of_department) accountEdits.role = (edits.account.role ? edits.account.role : (edits.head_of_department == true || (edits.head_of_department == null && abteilungsLeiter == true) ? "767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb" : "a74700bc-7e32-4597-a1e1-34c6d7674dad"))
    if (passwordReset == true || (edits.account.password != null && edits.account.password != "undefined")) {
      accountEdits.password = (passwordReset ? (`${slugify_dot(memberFirstname)}.${slugify_dot(memberLastname)}`) : edits.account.password ? edits.account.password : "")
    }

    delete edits.account
    await fetch(
      `https://cms.ariscorp.de/items/member/${id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: "PATCH",
        body: JSON.stringify(edits),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    // console.log("accId", accId)
    // console.log("accountEdits", accountEdits)
    await fetch(
      `https://cms.ariscorp.de/users/${accId}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: "PATCH",
        body: JSON.stringify(accountEdits),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return
  }
  async function saveMemberEdit () {
    console.log(`📝 ------MEMBER EDIT - ${modalStore.title ? modalStore.title : ''} ${modalStore.firstname} ${modalStore.lastname}------`)
    const roles = []
    if (adminsitrationCheckbox) roles.push("administration")
    if (marketingCheckbox) roles.push("marketing")
    if (memberCheckbox) roles.push("member")
    if (recruitingCheckbox) roles.push("recruitment")

    const edits = {
      account: {}
    }
    if (memberFirstname != modalStore.firstname) {
      console.log("✏️ ---FIRSTNAME---")
      console.log("OLD FIRSTNAME: " + modalStore.firstname)
      console.log("NEW FIRSTNAME: " + memberFirstname)

      edits.firstname = memberFirstname
    }
    if (memberLastname != modalStore.lastname) {
      console.log("✏️ ---LASTNAME---")
      console.log("OLD LASTNAME: " + modalStore.lastname)
      console.log("NEW LASTNAME: " + memberLastname)

      edits.lastname = memberLastname
    }
    if (memberTitle != modalStore.title) {
      console.log("✏️ ---TITLE---")
      console.log("OLD TITLE: " + modalStore.title)
      console.log("NEW TITLE: " + memberTitle)

      edits.title = memberTitle
    }
    if (abteilungsLeiter != modalStore.head_of_department) {
      console.log("✏️ ---HEAD OF DEPARTMENT---")
      console.log("OLD HEAD OF DEPARTMENT: " + modalStore.head_of_department)
      console.log("NEW HEAD OF DEPARTMENT: " + abteilungsLeiter)

      edits.head_of_department = abteilungsLeiter
    }
    if ((edits.head_of_department != null ? (edits.head_of_department == true) : (modalStore.head_of_department == true))) {
      console.log("🏬 ---HDEPARTENT---")
      console.log("OLD DEPARTMENT: " + modalStore.head_department?.gameplay_name)
      console.log("NEW DEPARTMENT: " + selectedDepartment?.gameplay_name)

      edits.department = null
      edits.head_department = [selectedDepartment?.id]
    } else if ((edits.head_of_department != null ? (edits.head_of_department == false) : (modalStore.head_of_department == false))) {
      console.log("🏬 ---DEPARTENT---")
      console.log("OLD DEPARTMENT: " + modalStore.department?.gameplay_name)
      console.log("NEW DEPARTMENT: " + selectedDepartment?.gameplay_name)

      edits.head_department = null
      edits.department = [selectedDepartment?.id]
    }
    if (roles != modalStore.member_rollen) {
      console.log("🧑‍🎨 ---ROLES---")
      console.log("OLD ROLES: " + modalStore.member_rollen)
      console.log("NEW ROLES: " + roles)

      edits.member_rollen = roles
    }
    console.log("modalStore.account?.role", modalStore.account?.role)
    if (selectedRole != modalStore.account?.role) {
      console.log("🕵️ ---ACCOUNT ROLE---")
      console.log("OLD ACCOUNT ROLE: " + modalStore.account.role)
      console.log("NEW ACCOUNT ROLE: " + selectedRole)

      edits.account.role = selectedRole.id
    }
    if (selectedStatus != modalStore.status) {
      console.log("🔖 ---STATUS---")
      console.log("OLD STATUS: " + modalStore.status)
      console.log("NEW STATUS: " + selectedStatus)

      edits.status = selectedStatus
    }
    if (passwordReset == true) {
      console.log("🔏 ---PASSWORD RESET---")
      console.log("PASSWORD RESET")

      edits.account.passwordReset = passwordReset
    }
    if (memberPassword != null && passwordReset != true) {
      console.log("🔐 ---PASSWORD---")
      console.log("OLD PASSWORD: *********")
      console.log("NEW PASSWORD: *********")

      edits.account.password = memberPassword
    }

    console.log("📑 ---EDIT-OBJECT:---")
    console.log(edits)
    await editMember(edits, modalStore.id, modalStore.account.id)
    closeModal()
    return updateMembers()
  }

  function openRemoveModal (member) {
    setModalStore(member)
    setModalType("removeMember")
    setModal(true)
  }
  async function removeMember () {
    await fetch(
      `https://cms.ariscorp.de/items/member/${modalStore.id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    await fetch(
      `https://cms.ariscorp.de/users/${modalStore.account.id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    closeModal()
    await updateMembers()
    return
  }

  function openAddModal () {
    setModalType("addMember")
    setSelectedStatus("draft")
    setModal(true)
  }
  function openEditModal (obj) {
    setModalType("editMember")
    setModalStore(obj)
    setMemberFirstname(obj.firstname)
    setMemberTitle(obj.title)
    setMemberLastname(obj.lastname)
    setAbteilungsleiter(obj.head_of_department)
    setSelectedDepartment(obj.head_of_department ? (departments.find(e => e.id == obj.head_department?.id)) : (departments.find(e => e.id == obj.department?.id)))
    setSelectedStatus(obj.status)
    if (obj.member_rollen.find(e => e == "member")) setMemberCheckbox(true)
    if (obj.member_rollen.find(e => e == "recruitment")) setRecruitingCheckbox(true)
    if (obj.member_rollen.find(e => e == "marketing")) setMarketingCheckbox(true)
    if (obj.member_rollen.find(e => e == "administration")) setAdministrationCheckbox(true)
    setSelectedRole(roles.find(e => e.id == obj.account.role))

    setModal(true)
  }
  function closeModal () {
    setModal(false)
    setTimeout(() => {
      setModalType("")
      setModalStore()
      setMemberFirstname()
      setMemberLastname()
      setMemberTitle()
      setAbteilungsleiter()
      setMemberCheckbox()
      setRecruitingCheckbox()
      setMarketingCheckbox()
      setAdministrationCheckbox()
      setSelectedStatus()
      setSelectedDepartment()
      setSelectedRole()
      setPasswordReset()
      setMemberPassword()
    }, 600);
  }

  return (
    <Layout>
      <motion.div
        key={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Head>
          <title>{siteTitle}</title>

          <meta property="twitter:title" content={siteTitle} />
          <meta property="og:title" content={siteTitle} />
          <meta name="title" content={siteTitle} />
        </Head>
        <Modal
          state={modal}
          setState={setModal}
          title={
            modalType == 'addMember' && 'Mitglied hinzufügen' ||
            modalType == 'editMember' && 'Bearbeiten: ' + (`${(modalStore?.title ? modalStore?.title : '')} ${modalStore?.firstname} ${modalStore?.lastname}`) ||
            modalType == 'removeMember' && 'Entfernen: ' + (`${(modalStore?.title ? modalStore?.title : '')} ${modalStore?.firstname} ${modalStore?.lastname}`)
          }
          closeFunction={closeModal}
        >
          <div className='mb-2'>
            {modalType == 'addMember' &&
              <div className='px-8'>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Basis Daten:</p>
                  <div className='flex justify-between mb-3 space-x-4'>
                    <label className='my-auto text-xl'>Titel:</label>
                    <div className='max-w-[230px]'>
                      <input
                        value={memberTitle}
                        onChange={(e) => setMemberTitle(e.target.value)}
                        placeholder="Dr. Med."
                        className="form-control placeholder:opacity-25 block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                    </div>
                  </div>
                  <div className='flex justify-between mb-3 space-x-4'>
                    <label className='my-auto text-xl'>Vorname:</label>
                    <div className='max-w-[230px]'>
                      <input
                        value={memberFirstname}
                        onChange={(e) => setMemberFirstname(e.target.value)}
                        placeholder="Chris"
                        className="form-control placeholder:opacity-25 block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                    </div>
                  </div>
                  <div className='flex justify-between space-x-4'>
                    <label className='my-auto text-xl'>Nachname:</label>
                    <div className='max-w-[230px]'>
                      <input
                        value={memberLastname}
                        onChange={(e) => setMemberLastname(e.target.value)}
                        placeholder="Roberts"
                        className="form-control placeholder:opacity-25 w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Sicherheit:</p>
                  <div className='flex justify-between space-x-4'>
                    <label className='my-auto text-xl'>Passwort:</label>
                    <div className='max-w-[230px]'>
                      <input
                        value={memberPassword}
                        onChange={(e) => setMemberPassword(e.target.value)}
                        placeholder="Passwort..."
                        className="disabled:opacity-25 form-control placeholder:opacity-25 w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                      {memberPassword != null && memberPassword != "" && <p className='text-[0.6rem] opacity-50'>Das Standardpassword wird zu dem oben festgelegten geändert.</p>}
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Abteilung:</p>
                  <div className='flex'>
                    <div className="flex my-auto mr-auto space-x-4">
                      <div>
                        <Checkbox state={abteilungsLeiter} setState={setAbteilungsleiter} id="c-1" color="primary" bg="[#111]" name="group" value="private">
                          <Checkbox.Label>Abteilungsleiter</Checkbox.Label>
                          <Checkbox.Indicator />
                        </Checkbox>
                      </div>
                    </div>
                    <div className='w-full ml-4'>
                      <Dropdown items={departments} state={selectedDepartment} setState={setSelectedDepartment} mode="departments" />
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Rollen:</p>
                  <div className='flex'>
                    <div className="flex flex-wrap my-auto mr-auto space-y-4">
                      <div className='flex w-full'>
                        <div className='ml-auto mr-[50%]'>
                          <Checkbox state={memberCheckbox} setState={setMemberCheckbox} id="c-2" color="primary" bg="[#111]" name="group" value="private">
                            <Checkbox.Label>Mitglied</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className='flex w-full'>
                        <div className='ml-auto mr-[50%]'>
                          <Checkbox state={recruitingCheckbox} setState={setRecruitingCheckbox} id="c-3" color="primary" bg="[#111]" name="group" value="private">
                            <Checkbox.Label>Rekrutierung</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className='flex w-full'>
                        <div className='ml-auto mr-[50%]'>
                          <Checkbox state={marketingCheckbox} setState={setMarketingCheckbox} id="c-4" color="primary" bg="[#111]" name="group" value="private">
                            <Checkbox.Label>Marketing & Presse</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className='flex w-full'>
                        <div className='ml-auto mr-[50%]'>
                          <Checkbox state={adminsitrationCheckbox} setState={setAdministrationCheckbox} id="c-5" color="primary" bg="[#111]" name="group" value="private">
                            <Checkbox.Label>Verwaltung</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Berechtigung:</p>
                  <div className='flex justify-between space-x-4'>
                    <label className='my-auto text-xl'>Rolle:</label>
                    <div className='max-w-[230px]'>
                      <Dropdown items={roles} state={selectedRole} setState={setSelectedRole} mode="roles" />
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Status:</p>
                  <div className='flex'>
                    <div className="flex justify-between w-full px-6 my-auto mr-auto">
                      <div>
                        <RadioButton state={selectedStatus} setState={setSelectedStatus} id="c-6" color="white" bg="[#111]" name="status" value="draft">
                          <RadioButton.Label>Entwurf</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                      <div>
                        <RadioButton state={selectedStatus} setState={setSelectedStatus} id="c-7" color="green-500" bg="[#111]" name="status" value="published">
                          <RadioButton.Label>Öffentlich</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full mt-8 space-x-12'>
                  <DefaultButton animate danger action={() => closeModal()}>
                    Abbruch
                  </DefaultButton>
                  <DefaultButton animate agree action={() => addMember()}>
                    Speichern!
                  </DefaultButton>
                </div>
              </div>
            }
            {modalType == 'editMember' &&
              <div className='px-8'>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Basis Daten:</p>
                  <div className='flex justify-between mb-3 space-x-4'>
                    <label className='my-auto text-xl'>Titel:</label>
                    <div className='max-w-[230px]'>
                      <input
                        value={memberTitle}
                        onChange={(e) => setMemberTitle(e.target.value)}
                        placeholder="Dr. Med."
                        className="form-control placeholder:opacity-25 block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                    </div>
                  </div>
                  <div className='flex justify-between mb-3 space-x-4'>
                    <label className='my-auto text-xl'>Vorname:</label>
                    <div className='max-w-[230px]'>
                      <input
                        value={memberFirstname}
                        onChange={(e) => setMemberFirstname(e.target.value)}
                        placeholder="Chris"
                        className="form-control placeholder:opacity-25 block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                    </div>
                  </div>
                  <div className='flex justify-between space-x-4'>
                    <label className='my-auto text-xl'>Nachname:</label>
                    <div className='max-w-[230px]'>
                      <input
                        value={memberLastname}
                        onChange={(e) => setMemberLastname(e.target.value)}
                        placeholder="Roberts"
                        className="form-control placeholder:opacity-25 w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Sicherheit:</p>
                  <div className='flex'>
                    <div className="flex my-auto mr-auto space-x-4">
                      <div onClick={() => setMemberPassword("")}>
                        <Checkbox state={passwordReset} setState={setPasswordReset} id="c-0" color="red-500" bg="[#111]">
                          <Checkbox.Label>Passwort zurücksetzen</Checkbox.Label>
                          <Checkbox.Indicator />
                        </Checkbox>
                      </div>
                    </div>
                    <div className='w-full ml-4'>
                      <input
                        value={memberPassword}
                        onChange={(e) => setMemberPassword(e.target.value)}
                        placeholder="Neues Passwort..."
                        disabled={passwordReset}
                        className="disabled:opacity-25 form-control placeholder:opacity-25 w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                      {passwordReset && <p className='text-[0.6rem] opacity-50'>Das Passwort wird auf den Standardwert zurückgesetzt: "vorname(n).nachname"</p>}
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Abteilung:</p>
                  <div className='flex'>
                    <div className="flex my-auto mr-auto space-x-4">
                      <div>
                        <Checkbox state={abteilungsLeiter} setState={setAbteilungsleiter} id="c-1" color="primary" bg="[#111]" name="group" value="private">
                          <Checkbox.Label>Abteilungsleiter</Checkbox.Label>
                          <Checkbox.Indicator />
                        </Checkbox>
                      </div>
                    </div>
                    <div className='w-full ml-4'>
                      <Dropdown items={departments} state={selectedDepartment} setState={setSelectedDepartment} mode="departments" />
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Rollen:</p>
                  <div className='flex'>
                    <div className="flex flex-wrap my-auto mr-auto space-y-4">
                      <div className='flex w-full'>
                        <div className='ml-auto mr-[50%]'>
                          <Checkbox state={memberCheckbox} setState={setMemberCheckbox} id="c-2" color="primary" bg="[#111]" name="group" value="private">
                            <Checkbox.Label>Mitglied</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className='flex w-full'>
                        <div className='ml-auto mr-[50%]'>
                          <Checkbox state={recruitingCheckbox} setState={setRecruitingCheckbox} id="c-3" color="primary" bg="[#111]" name="group" value="private">
                            <Checkbox.Label>Rekrutierung</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className='flex w-full'>
                        <div className='ml-auto mr-[50%]'>
                          <Checkbox state={marketingCheckbox} setState={setMarketingCheckbox} id="c-4" color="primary" bg="[#111]" name="group" value="private">
                            <Checkbox.Label>Marketing & Presse</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className='flex w-full'>
                        <div className='ml-auto mr-[50%]'>
                          <Checkbox state={adminsitrationCheckbox} setState={setAdministrationCheckbox} id="c-5" color="primary" bg="[#111]" name="group" value="private">
                            <Checkbox.Label>Verwaltung</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Berechtigung:</p>
                  <div className='flex justify-between space-x-4'>
                    <label className='my-auto text-xl'>Rolle:</label>
                    <div className='w-full max-w-[230px]'>
                      <Dropdown items={roles} state={selectedRole} setState={setSelectedRole} mode="roles" />
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <p className='w-full -ml-4 text-base text-left'>Status:</p>
                  <div className='flex'>
                    <div className="flex justify-between w-full px-6 my-auto mr-auto">
                      <div>
                        <RadioButton state={selectedStatus} setState={setSelectedStatus} id="c-6" color="white" bg="[#111]" name="status" value="draft">
                          <RadioButton.Label>Entwurf</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                      <div>
                        <RadioButton state={selectedStatus} setState={setSelectedStatus} id="c-7" color="green-500" bg="[#111]" name="status" value="published">
                          <RadioButton.Label>Öffentlich</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full mt-8 space-x-12'>
                  <DefaultButton animate danger action={() => closeModal()}>
                    Abbruch
                  </DefaultButton>
                  <DefaultButton animate agree action={() => saveMemberEdit()}>
                    Speichern!
                  </DefaultButton>
                </div>
              </div>
            }
            {modalType == 'removeMember' &&
              <div className='px-8'>
                <h3>Bist du sicher, das du dieses Mitglied entfernen möchtest?</h3>
                <div className='w-full mt-8 space-x-12'>
                  <DefaultButton animate agree action={closeModal}>
                    Nein!
                  </DefaultButton>
                  <DefaultButton animate danger action={removeMember}>
                    Ja!
                  </DefaultButton>
                </div>
              </div>
            }
          </div>
        </Modal>
        <div className='w-full h-full'>
          <Tab.Group
            selectedIndex={activeTab}
            onChange={(event) =>
              replace(
                { query: { tab: event } },
                undefined,
                {
                  shallow: true,
                }
              ) + setActiveTab(event)
            }
            as={Fragment}
          >
            <div className='w-1/4 lg:space-x-6 lg:flex'>
              <Tab.List>
                <ul className="w-full py-2 pl-0 rounded-md lg:mr-12">
                  <BasicPanel>
                    {tabs.map((data) => (
                      <Tab key={data.name} as={Fragment}>
                        {({ selected }) => (
                          <li
                            className={
                              (selected
                                ? 'text-secondary '
                                : 'text-white/70 hover:text-white ') +
                              'list-none hover:bg-bg-primary hover:cursor-pointer flex space-x-4 my-2 rounded-lg ml-0 p-2'
                            }
                          >
                            {data.name}
                          </li>
                        )}
                      </Tab>
                    ))}
                  </BasicPanel>
                </ul>
              </Tab.List>
              <Tab.Panels className={'px-4 xl:px-0'}>
                {tabs.map((data) => (
                  <Tab.Panel key={data.name}>
                    <h3 className="text-secondary">
                      {data.name}
                    </h3>
                    {data.content}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </motion.div>
    </Layout>
  )
}