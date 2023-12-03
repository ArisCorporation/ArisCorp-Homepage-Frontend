import { useSession } from 'next-auth/react'
import Layout from './layout'
import {
  GET_GAMEPLAYS,
  GET_INTERNAL_ADMIN_DATA,
  GET_MEMBERS,
  INTERNAL_GET_Ships_MY_HANGAR,
} from 'graphql/queries'
import client from 'apollo/clients'
import { Fragment, useEffect, useState } from 'react'
import { BasicPanel } from 'components/panels'
import { Tab } from '@headlessui/react'
import Modal from 'components/modal'
import MultipleCombobox from 'components/MultipleCombobox'
import Checkbox from 'components/Checkbox'
import Dropdown from 'components/Dropdown'
import {
  ArrowUturnLeftIcon,
  DocumentIcon,
  GlobeEuropeAfricaIcon,
  PencilSquareIcon,
} from '@heroicons/react/20/solid'
import { AiOutlinePlus } from 'react-icons/ai'
import RadioButton from 'components/RadioButton'
import { BsTrash } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import DefaultButton from 'components/DefaultButton'
import { useRouter } from 'next/router'
import { Cropper } from 'react-cropper'

function slugify(str) {
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

function slugify_dot(str) {
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

export async function getServerSideProps() {
  const { data: rawData } = await client.query({
    query: GET_INTERNAL_ADMIN_DATA,
  })
  const { data: gameplayData } = await client.query({ query: GET_GAMEPLAYS })
  const { data: rawShipList } = await client.query({
    query: INTERNAL_GET_Ships_MY_HANGAR,
  })

  const memberData = []
  rawData.member.map((obj) => {
    const roles = [...obj.roles.sort()]
    const item = {
      ...obj,
      department: obj.department ? obj.department : null,
      head_department: obj.head_department[0] ? obj.head_department[0] : null,
      roles: roles,
    }

    memberData.push(item)
  })

  const ships = rawShipList.ships.sort((a, b) => a.name.localeCompare(b.name))
  const siteTitle = 'ADMIN - ArisCorp Management System'

  return {
    props: {
      shipList: ships,
      memberApiList: memberData,
      departments: gameplayData.gameplays,
      siteTitle,
    },
  }
}

export default function InternalIndex({
  shipList,
  siteTitle,
  memberApiList,
  departments,
}) {
  const { data: session, status: sessionStatus } = useSession()
  const authorized = sessionStatus === 'authenticated'
  const [userData, setUserData] = useState()
  const { replace, query, push } = useRouter()
  const [authenticationChecked, setAuthenticationChecked] = useState(false)
  const checkRole = async (id) => {
    const data = await fetch(
      'https://cms.ariscorp.de/users?filter[id]=' +
        id +
        '&access_token=' +
        process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: 'GET',
      }
    ).then((res) => res.json())

    return setUserData(data.data[0])
  }
  useEffect(() => {
    if (authorized == true && session.user.id) {
      if (
        session.user?.role == '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb' ||
        session.user.position == 'administration'
      ) {
        return
      } else if (
        session.user?.role != '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb' ||
        session.user.position != 'administration'
      ) {
        push({
          pathname: '/internal',
        })
      }
    }
  }, [session, authorized, userData, sessionStatus])

  const [modal, setModal] = useState(false)
  const [secondModal, setSecondModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [secondModalType, setSecondModalType] = useState('')
  const [modalStore, setModalStore] = useState()
  const [memberFirstname, setMemberFirstname] = useState()
  const [memberLastname, setMemberLastname] = useState()
  const [memberTitle, setMemberTitle] = useState()
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [selectedStatus, setSelectedStatus] = useState()
  const [selectedPosition, setSelectedPosition] = useState()
  const [abteilungsLeiter, setAbteilungsleiter] = useState()
  const [contentCheckbox, setContentCheckbox] = useState()
  const [recruitingCheckbox, setRecruitingCheckbox] = useState()
  const [marketingCheckbox, setMarketingCheckbox] = useState()
  const [adminCheckbox, setAdminCheckbox] = useState(false)
  const [passwordReset, setPasswordReset] = useState()
  const [memberPassword, setMemberPassword] = useState()
  const [memberList, setMemberList] = useState(memberApiList)
  const [activeTab, setActiveTab] = useState(0)
  const tabquery = query.tab
  const [selectedShip, setSelectedShip] = useState()
  const [selectedShips, setSelectedShips] = useState([])
  const [shipForRemoval, setShipForRemoval] = useState()
  const [shipName, setShipName] = useState('')
  const [shipSerial, setShipSerial] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('ariscorp')
  const [selectedVisibility, setSelectedVisibility] = useState('ariscorp')
  const [addMenu, setAddMenu] = useState()
  const [avatarFile, setAvatarFile] = useState()
  const [cropper, setCropper] = useState()
  const [rawAvatarUrl, setRawAvatarUrl] = useState('')

  const tabs = [
    {
      name: 'Mitarbeiterverwaltung',
      content: (
        <>
          <div>
            <div className="w-full">
              <table className="w-full overflow-hidden text-sm text-left table-auto rounded-xl">
                <thead className="text-xs uppercase bg-[#333]">
                  <tr>
                    <th className="px-6 py-3">Status</th>
                    <th className="w-12 px-6 py-3"></th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Abteilung</th>
                    <th className="px-6 py-3">
                      <span></span>
                    </th>
                    <th
                      onClick={() => openAddModal()}
                      className="px-6 py-1 text-center text-green-400 transition-all duration-200 opacity-50 cursor-pointer hover:duration-300 hover:opacity-100"
                    >
                      <AiOutlinePlus className="w-5 h-5" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {memberList?.map((member) => (
                    <tr
                      key={member.id}
                      className="border-b bg-[#222] border-[#333] hover:bg-[#444]"
                    >
                      <td
                        className={
                          'px-6 py-4 flex justify-center' +
                          (member.status == 'draft' ? ' text-white' : '') +
                          (member.status == 'published'
                            ? ' text-green-500'
                            : '')
                        }
                      >
                        {member.status == 'draft' && (
                          <DocumentIcon className="w-6 h-6 my-auto" />
                        )}
                        {member.status == 'published' && (
                          <GlobeEuropeAfricaIcon className="w-6 h-6 my-auto" />
                        )}
                      </td>
                      <td className="px-6 py-2">
                        <div
                          className="w-12 h-12 bg-top bg-no-repeat bg-cover rounded-full"
                          style={{
                            backgroundImage: `url(https://cms.ariscorp.de/assets/${member.member_potrait.id}?height=400)`,
                          }}
                        ></div>
                      </td>
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap">
                        <div className="my-auto">
                          {member.title} {member.firstname} {member.lastname}
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        <span className="my-auto">
                          {member.head_of_department
                            ? member.head_department?.gameplay_name
                              ? member.head_department.gameplay_name
                              : 'N/A'
                            : member.department?.gameplay_name
                            ? member.department.gameplay_name
                            : 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex my-auto space-x-4">
                          <div
                            onClick={() => openEditModal(member)}
                            className="font-medium text-center transition-all duration-200 opacity-50 cursor-pointer hover:opacity-100 text-primary hover:duration-300"
                          >
                            Edit
                          </div>
                          <div
                            onClick={() => openRemoveModal(member)}
                            className="font-medium text-center text-red-500 transition-all duration-200 opacity-50 cursor-pointer hover:opacity-100 hover:duration-300"
                          >
                            <BsTrash className="w-5 h-5" />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ),
    },
    {
      name: 'Hangarverwaltung',
      content: (
        <>
          <div className="w-full">
            <table className="w-full overflow-hidden text-sm text-left table-auto rounded-xl">
              <thead className="text-xs uppercase bg-[#333]">
                <tr>
                  <th className="w-12 px-6 py-3"></th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Hangar</th>
                  <th className="px-6 py-3">
                    <span></span>
                  </th>
                  <th
                    onClick={() => openAddModal()}
                    className="px-6 py-1 text-center text-green-400 transition-all duration-200 opacity-50 cursor-pointer hover:duration-300 hover:opacity-100"
                  >
                    <AiOutlinePlus className="w-5 h-5" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {memberList?.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b bg-[#222] dark:border-[#333] hover:bg-[#444]"
                  >
                    <td className="px-6 py-2">
                      <div
                        className="w-12 h-12 bg-top bg-no-repeat bg-cover rounded-full"
                        style={{
                          backgroundImage: `url(https://cms.ariscorp.de/assets/${member.member_potrait.id}?height=400)`,
                        }}
                      ></div>
                    </td>
                    <th className="px-6 py-4 font-medium text-white whitespace-nowrap">
                      <div className="my-auto">
                        {member.title} {member.firstname} {member.lastname}
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <span className="my-auto">
                        {member.ships.length} Schiffe/Fahrzeuge
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex my-auto space-x-4">
                        <div
                          onClick={() => openHangarEditModal(member)}
                          className="font-medium text-center transition-all duration-200 opacity-50 cursor-pointer hover:opacity-100 text-primary hover:duration-300"
                        >
                          Edit
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
  ]

  const position_levels = [
    {
      id: 1,
      name: 'Anwärter',
      value: 'candidate',
    },
    {
      id: 2,
      name: 'Freier Mitarbeiter',
      value: 'freelancer',
    },
    {
      id: 3,
      name: 'Mitarbeiter',
      value: 'employee',
    },
    {
      id: 3,
      name: 'Verwaltung',
      value: 'administration',
    },
  ]

  useEffect(() => {
    if (tabquery != null && tabquery != '') {
      setActiveTab(tabquery)
    } else {
      setActiveTab(0)
    }
  }, [tabquery])

  const handleAvatarUpload = (e) => {
    if (e.target.files) {
      setRawAvatarUrl(URL.createObjectURL(e.target.files[0]))
      setSecondModal(true)
      setSecondModalType('editAvatar')
    }
  }

  const handleAvatarSave = async () => {
    if (cropper) {
      const file = await fetch(cropper.getCroppedCanvas().toDataURL())
        .then((res) => res.blob())
        .then((blob) => {
          return new File(
            [blob],
            memberFirstname + '-' + memberLastname + '-avatar' + '.png',
            { type: 'image/png' }
          )
        })
      if (file) {
        setAvatarFile(file)
      }
    }
    closeSecondModal()
  }

  const updateMembers = async () => {
    let rawData = await fetch(
      // "https://cms.ariscorp.de/items/member_ships?fields=*.*&filter[member_id]=" + session.user.id,
      // "https://cms.ariscorp.de/items/member?fields=*,member_potrait.id,head_department.id,head_department.gameplay_name,department.id,department.gameplay_name,account.id,account.role&filter[status][_neq]=archived&sort=firstname&access_token=" + process.env.NEXT_PUBLIC_CMS_TOKEN,
      'https://cms.ariscorp.de/items/member?fields=id,status,firstname,lastname,slug,title,account.id,account.role,member_potrait.id,roles,position_level,head_of_department,head_department.id,head_department.gameplay_name,department.id,department.gameplay_name,ships.id,ships.name,ships.serial,ships.group,ships.visibility,ships.department.gameplay_name,ships.department.gameplay_logo.id,ships.ships_id.id,ships.ships_id.name,ships.ships_id.slug,ships.ships_id.storeImage.id,ships.ships_id.manufacturer.firmen_name&filter[status][_neq]=archived&sort=firstname&access_token=' +
        process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: 'GET',
      }
    ).then((res) => res.json())
    const data = []
    rawData.data.map((obj) => {
      const roles = [...obj.roles.sort()]
      const item = {
        ...obj,
        department: obj.department ? obj.department : null,
        head_department: obj.head_department[0] ? obj.head_department[0] : null,
        roles,
      }
      data.push(item)
    })

    setMemberList(data)
    if (modalStore && modalType == 'editHangar')
      setModalStore(data.find((e) => e.id == modalStore.id))
    return console.log('MEMBER UPDATED!')
  }

  const addMember = async () => {
    const roles = []
    if (marketingCheckbox) roles.push('marketing')
    if (contentCheckbox) roles.push('content_writer')
    if (recruitingCheckbox) roles.push('recruitment')

    const memberObject = {
      status: selectedStatus,
      firstname: memberFirstname,
      lastname: memberLastname,
      title: memberTitle,
      slug: slugify(
        memberFirstname + (memberLastname ? ' ' + memberLastname : '')
      ),
      roles: roles,
      position_level: selectedPosition?.value,
      head_of_department: abteilungsLeiter,
      head_department:
        abteilungsLeiter && (selectedDepartment ? [selectedDepartment] : []),
      department:
        !abteilungsLeiter && (selectedDepartment ? selectedDepartment : null),
      ueeState: 'civilian',
    }

    const accountObject = {
      first_name: memberFirstname,
      last_name: memberLastname,
      title: memberTitle,
      email:
        slugify_dot(memberFirstname) +
        (memberLastname ? '.' + slugify_dot(memberLastname) : '') +
        '@ariscorp.de',
      password: memberPassword
        ? memberPassword
        : `${slugify_dot(memberFirstname)}${
            memberLastname ? `.${slugify_dot(memberLastname)}` : ''
          }`,
      passwordMustChange: memberPassword ? false : true,
      role:
        adminCheckbox == true
          ? '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
          : 'a74700bc-7e32-4597-a1e1-34c6d7674dad',
    }

    const createdAccount = await fetch(
      'https://cms.ariscorp.de/users?access_token=' +
        process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: 'POST',
        body: JSON.stringify(accountObject),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json())

    memberObject.account = createdAccount.data.id
    console.log('memberobj', memberObject)
    await fetch(
      'https://cms.ariscorp.de/items/member?access_token=' +
        process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: 'POST',
        body: JSON.stringify(memberObject),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    closeModal()
    return updateMembers()
  }

  async function editMember(edits, id, accId) {
    const accountEdits = {}
    if (edits.firstname) accountEdits.first_name = edits.firstname
    if (edits.lastname) accountEdits.last_name = edits.lastname
    if (edits.title) accountEdits.title = edits.title
    if (edits.account?.role || edits.head_of_department)
      accountEdits.role = edits.account.role
        ? edits.account.role
        : edits.head_of_department == true ||
          (edits.head_of_department == null && abteilungsLeiter == true)
        ? '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
        : 'a74700bc-7e32-4597-a1e1-34c6d7674dad'
    if (
      edits.account.passwordReset == true ||
      (edits.account.password != null && edits.account.password != '')
    ) {
      if (edits.account.passwordReset) {
        accountEdits.password =
          (edits.firstname
            ? slugify_dot(edits.firstname)
            : slugify_dot(memberFirstname)) +
          (edits.lastname || memberLastname
            ? '.' +
              (edits.lastname
                ? slugify_dot(edits.lastname)
                : slugify_dot(memberLastname))
            : '')
      } else {
        accountEdits.password = edits.account.password
      }
    }
    if (edits.account.email) {
      accountEdits.email = edits.account.email
    }

    if (avatarFile) {
      const formData = new FormData()
      formData.append('name', `${memberFirstname}-${memberLastname}-Avatar`)
      formData.append('folder', '8658f40d-77d9-44c4-8f0d-af820855a3bc')
      formData.append('file', avatarFile)

      let resdata = await fetch(
        'https://cms.ariscorp.de/files?access_token=' +
          process.env.NEXT_PUBLIC_CMS_TOKEN,
        {
          method: 'POST',
          body: formData,
        }
      ).then((res) => res.json())

      edits.member_potrait = resdata.data.id
      accountEdits.avatar = resdata.data.id
    }

    delete edits.account
    await fetch(
      `https://cms.ariscorp.de/items/member/${id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'PATCH',
        body: JSON.stringify(edits),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    await fetch(
      `https://cms.ariscorp.de/users/${accId}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'PATCH',
        body: JSON.stringify(accountEdits),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return
  }
  async function saveMemberEdit() {
    console.log(
      `📝 ------MEMBER EDIT - ${modalStore.title ? modalStore.title : ''} ${
        modalStore.firstname
      } ${modalStore.lastname}------`
    )
    const roles = []
    if (marketingCheckbox) roles.push('marketing')
    if (recruitingCheckbox) roles.push('recruitment')
    if (contentCheckbox) roles.push('content_writer')

    const edits = {
      account: {},
    }
    if (memberFirstname != modalStore.firstname) {
      console.log('✏️ ---FIRSTNAME---')
      console.log('OLD FIRSTNAME: ' + modalStore.firstname)
      console.log('NEW FIRSTNAME: ' + memberFirstname)

      edits.firstname = memberFirstname
    }
    if (memberLastname != modalStore.lastname) {
      console.log('✏️ ---LASTNAME---')
      console.log('OLD LASTNAME: ' + modalStore.lastname)
      console.log('NEW LASTNAME: ' + memberLastname)

      edits.lastname = memberLastname
    }
    if (
      memberFirstname != modalStore.firstname ||
      memberLastname != modalStore.lastname
    ) {
      const rawEmail =
        (edits.firstname
          ? slugify_dot(edits.firstname)
          : slugify_dot(memberFirstname)) +
        (edits.lastname || memberLastname
          ? '.' +
            (edits.lastname
              ? slugify_dot(edits.lastname)
              : slugify_dot(memberLastname))
          : '') +
        '@ariscorp.de'
      console.log('＠ ---EMAIL---')
      console.log('OLD EMAIL: ' + modalStore.account.email)
      console.log('NEW EMAIL: ' + rawEmail)

      edits.account.email = rawEmail.toLowerCase()
    }
    if (memberTitle != modalStore.title) {
      console.log('✏️ ---TITLE---')
      console.log('OLD TITLE: ' + modalStore.title)
      console.log('NEW TITLE: ' + memberTitle)

      edits.title = memberTitle
    }
    if (abteilungsLeiter != modalStore.head_of_department) {
      console.log('✏️ ---HEAD OF DEPARTMENT---')
      console.log('OLD HEAD OF DEPARTMENT: ' + modalStore.head_of_department)
      console.log('NEW HEAD OF DEPARTMENT: ' + abteilungsLeiter)

      edits.head_of_department = abteilungsLeiter
    }
    if (
      edits.head_of_department != null
        ? edits.head_of_department == true
        : modalStore.head_of_department == true
    ) {
      console.log('🏬 ---HDEPARTMENT---')
      console.log(
        'OLD DEPARTMENT: ' + modalStore.head_department?.gameplay_name
      )
      console.log('NEW DEPARTMENT: ' + selectedDepartment?.gameplay_name)

      edits.department = null
      edits.head_department = selectedDepartment?.id
        ? [selectedDepartment.id]
        : null
    } else if (
      edits.head_of_department != null
        ? edits.head_of_department == false
        : modalStore.head_of_department == false
    ) {
      console.log('🏬 ---DEPARTMENT---')
      console.log('OLD DEPARTMENT: ' + modalStore.department?.gameplay_name)
      console.log('NEW DEPARTMENT: ' + selectedDepartment?.gameplay_name)

      edits.head_department = null
      edits.department = selectedDepartment?.id ? selectedDepartment.id : null
    }
    if (roles != modalStore.roles) {
      console.log('🧑‍🎨 ---ROLES---')
      console.log('OLD ROLES: ' + modalStore.roles)
      console.log('NEW ROLES: ' + roles)

      edits.roles = roles
    }
    if (selectedPosition.value != modalStore.position_level) {
      console.log('🕵️ ---ACCOUNT ROLE---')
      console.log('OLD POSITION LEVEL: ' + modalStore.position_level)
      console.log('NEW POSITION LEVEL: ' + selectedPosition.value)

      edits.position_level = selectedPosition.value
    }
    if (selectedStatus != modalStore.status) {
      console.log('🔖 ---STATUS---')
      console.log('OLD STATUS: ' + modalStore.status)
      console.log('NEW STATUS: ' + selectedStatus)

      edits.status = selectedStatus
    }
    if (passwordReset == true) {
      console.log('🔏 ---PASSWORD RESET---')
      console.log('PASSWORD RESET')

      edits.account.passwordReset = passwordReset
    }
    if (
      memberPassword != null &&
      memberPassword != '' &&
      passwordReset != true
    ) {
      console.log('🔐 ---PASSWORD---')
      console.log('OLD PASSWORD: *********')
      console.log('NEW PASSWORD: *********')

      edits.account.password = memberPassword
    }
    if (
      adminCheckbox
        ? modalStore.account.role != '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
        : modalStore.account.role == '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
    ) {
      console.log('👨‍💼 ---ADMIN---')
      console.log(
        'OLD ADMIN STATUS: ' +
          (modalStore.account.role == '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
            ? 'TRUE'
            : 'FALSE')
      )
      console.log('NEW PASSWORD: ' + +(adminCheckbox ? 'TRUE' : 'FALSE'))

      edits.account.role =
        adminCheckbox == true
          ? '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
          : 'a74700bc-7e32-4597-a1e1-34c6d7674dad'
    }

    console.log('📑 ---EDIT-OBJECT:---')
    console.log(edits)
    await editMember(edits, modalStore.id, modalStore.account.id)
    closeModal()
    return updateMembers()
  }

  function openRemoveModal(member) {
    setModalStore(member)
    setModalType('removeMember')
    setModal(true)
  }
  async function removeMember() {
    await fetch(
      `https://cms.ariscorp.de/items/member/${modalStore.id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    await fetch(
      `https://cms.ariscorp.de/users/${modalStore.account.id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    closeModal()
    await updateMembers()
    return
  }

  function openAddModal() {
    setModalType('addMember')
    setSelectedStatus('draft')
    setModal(true)
  }
  function openEditModal(obj) {
    setModalType('editMember')
    setModalStore(obj)
    setMemberFirstname(obj.firstname)
    setMemberTitle(obj.title)
    setMemberLastname(obj.lastname)
    setAbteilungsleiter(obj.head_of_department)
    setSelectedDepartment(
      obj.head_of_department
        ? departments.find((e) => e.id == obj.head_department?.id)
        : departments.find((e) => e.id == obj.department?.id)
    )
    setSelectedStatus(obj.status)
    if (obj.roles.find((e) => e == 'recruitment')) setRecruitingCheckbox(true)
    if (obj.roles.find((e) => e == 'marketing')) setMarketingCheckbox(true)
    if (obj.roles.find((e) => e == 'content_writer')) setContentCheckbox(true)
    setSelectedPosition(
      position_levels.find((e) => e.value == obj.position_level)
    )
    setAdminCheckbox(
      obj.account.role == '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb' ? true : false
    )

    setModal(true)
  }
  function openHangarEditModal(obj) {
    setModalType('editHangar')
    setModalStore(obj)
    setModal(true)
  }
  function openHelpModal(obj) {
    setModalType('help')
    setModal(true)
  }
  function modalEditShip(ship) {
    setSelectedShip(ship)
    setShipName(ship.name)
    setShipSerial(ship.serial)
    if (ship.group) {
      setSelectedGroup(ship.group)
    }
    if (ship.department) {
      setSelectedDepartment(ship.department)
    }
    if (ship.visibility) {
      setSelectedVisibility(ship.visibility)
    }
  }
  async function editShip(edits, id) {
    await fetch(
      `https://cms.ariscorp.de/items/member_ships/${id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'PATCH',
        body: JSON.stringify(edits),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return
  }
  async function saveMemberShipEdit() {
    console.log(
      `📝 ------SHIP EDIT - ${selectedShip.ships_id.manufacturer.firmen_name} ${selectedShip.ships_id.name}------`
    )

    const edits = {}
    if (shipName != selectedShip.name) {
      console.log('✏️ ---NAME---')
      console.log('OLD NAME: ' + selectedShip.name)
      console.log('NEW NAME: ' + shipName)

      edits.name = shipName
    }
    if (shipSerial != selectedShip.serial) {
      console.log('#️⃣ ---SERIAL---')
      console.log('OLD SERIAL: ' + selectedShip.serial)
      console.log('NEW SERIAL: ' + shipSerial)

      edits.serial = shipSerial
    }
    if (selectedGroup != selectedShip.group) {
      console.log('🏘️ ---GROUP---')
      console.log(
        'OLD GROUP: ' +
          (selectedShip.group == 'private'
            ? 'Private'
            : selectedShip.group == 'ariscorp' && 'ArisCorp')
      )
      console.log(
        'NEW GROUP: ' +
          (selectedGroup == 'private'
            ? 'Private'
            : selectedGroup == 'ariscorp' && 'ArisCorp')
      )

      edits.group = selectedGroup
    }
    if (selectedDepartment?.id != selectedShip.department?.id) {
      console.log('🏬 ---DEPARTENT---')
      console.log('OLD DEPARTMENT: ' + selectedShip.department?.gameplay_name)
      console.log('NEW DEPARTMENT: ' + selectedDepartment?.gameplay_name)

      edits.department = selectedDepartment?.id || null
    }
    if (selectedVisibility != selectedShip.visibility) {
      console.log('👀 ---VISIBILITY---')
      console.log(
        'OLD VISIBILITY: ' +
          (selectedShip.visibility == 'public'
            ? 'Öffentlich'
            : selectedShip.visibility == 'internal'
            ? 'Intern'
            : selectedShip.visibility == 'hidden' && 'Versteckt')
      )
      console.log(
        'NEW VISIBILITY: ' +
          (selectedVisibility == 'public'
            ? 'Öffentlich'
            : selectedVisibility == 'internal'
            ? 'Intern'
            : selectedVisibility == 'hidden' && 'Versteckt')
      )

      edits.visibility = selectedVisibility
    }

    console.log('📑 ---EDIT-OBJECT:---')
    console.log(edits)
    await editShip(edits, selectedShip.id)
    setSelectedShip()
    return updateMembers()
  }
  function shipRemoval(ship) {
    setSelectedShip(ship)
    setShipForRemoval(true)
  }
  async function removeShip() {
    await fetch(
      `https://cms.ariscorp.de/items/member_ships/${selectedShip.id}?access_token=${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    setSelectedShip()
    setShipForRemoval()
    return updateMembers()
  }
  const addShips = async (ships) => {
    const IDs = []
    const body = []
    ships.forEach((ship) => {
      const id = shipList.find((e) => e == ship).id
      IDs.push(id)
    })
    IDs.forEach((id) => {
      const item = {
        member_id: modalStore.id,
        ships_id: id,
        group: 'ariscorp',
        visibility: 'internal',
      }

      body.push(item)
    })

    await fetch(
      'https://cms.ariscorp.de/items/member_ships?access_token=' +
        process.env.NEXT_PUBLIC_CMS_TOKEN,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    setSelectedShips([])
    return updateMembers()
  }
  function closeModal() {
    setModal(false)
    setTimeout(() => {
      setModalType('')
      setModalStore()
      setMemberFirstname()
      setMemberLastname()
      setMemberTitle()
      setAbteilungsleiter()
      setContentCheckbox()
      setRecruitingCheckbox()
      setMarketingCheckbox()
      setAdminCheckbox(false)
      setSelectedStatus()
      setSelectedDepartment()
      setSelectedPosition()
      setPasswordReset()
      setMemberPassword()
      setSelectedShip()
      setShipName()
      setShipSerial()
      setSelectedGroup()
      setSelectedVisibility()
      setShipForRemoval()
      setAddMenu()
      setSelectedShips([])
    }, 600)
  }
  function closeSecondModal() {
    setSecondModal(false)
    setTimeout(() => {
      setSecondModalType('')
    }, 600)
  }

  // z-[100] z-[1] z-[99]
  return (
    <Layout helpAction={openHelpModal}>
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
          state={secondModal}
          setState={setSecondModal}
          title={secondModalType == 'editAvatar' && 'Avatar anpassen:'}
          closeFunction={closeModal}
          z={100}
        >
          <div className="mb-2">
            {secondModalType == 'editAvatar' && (
              <div className="px-8">
                <div>
                  <div className="flex justify-center overflow-hidden">
                    <BasicPanel classes={'overflow-hidden'}>
                      <Cropper
                        src={rawAvatarUrl}
                        style={{ height: 320, width: 270, overflow: 'hidden' }}
                        minCropBoxHeight={320}
                        minCropBoxWidth={270}
                        guides={true}
                        checkOrientation={false}
                        dragMode="move"
                        onInitialized={(instance) => {
                          setCropper(instance)
                        }}
                      />
                    </BasicPanel>
                  </div>
                </div>
                <div className="w-full mt-8 space-x-12">
                  <DefaultButton
                    animate
                    danger
                    action={() => closeSecondModal()}
                  >
                    Schließen!
                  </DefaultButton>
                  <DefaultButton animate agree action={handleAvatarSave}>
                    Speichern!
                  </DefaultButton>
                </div>
              </div>
            )}
          </div>
        </Modal>
        <Modal
          state={modal}
          setState={setModal}
          title={
            (modalType == 'addMember' && 'Mitglied hinzufügen') ||
            (modalType == 'editMember' &&
              'Bearbeiten: ' +
                `${modalStore?.title ? modalStore?.title : ''} ${
                  modalStore?.firstname
                } ${modalStore?.lastname}`) ||
            (modalType == 'removeMember' &&
              'Entfernen: ' +
                `${modalStore?.title ? modalStore?.title : ''} ${
                  modalStore?.firstname
                } ${modalStore?.lastname}`) ||
            (modalType == 'editHangar' &&
              !selectedShip &&
              'Hangar Bearbeiten von:') ||
            (modalType == 'editHangar' &&
              selectedShip &&
              'Bearbeiten: ' +
                (selectedShip?.name
                  ? `"${selectedShip?.name}"`
                  : (selectedShip?.ships_id?.manufacturer.firmen_name.split(' ')
                      .length > 2
                      ? selectedShip?.ships_id?.manufacturer.code
                      : selectedShip?.ships_id?.manufacturer.firmen_name.split(
                          ' '
                        )[0]) +
                    ' ' +
                    selectedShip?.ships_id?.name) +
                ' von:') ||
            (modalType == 'help' && 'Hilfe:')
          }
          subtitle={
            modalType == 'editHangar' &&
            `${modalStore?.title ? modalStore?.title : ''} ${
              modalStore?.firstname
            } ${modalStore?.lastname}`
          }
          closeFunction={() => (secondModal ? null : closeModal())}
          wxl={modalType == 'editHangar' ? true : false}
        >
          <div className="mb-2">
            {modalType == 'addMember' && (
              <div className="px-8">
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">
                    Basis Daten:
                  </p>
                  <div className="flex justify-between mb-3 space-x-4">
                    <label className="my-auto text-xl">Titel:</label>
                    <div className="max-w-[230px]">
                      <input
                        value={memberTitle}
                        onChange={(e) => setMemberTitle(e.target.value)}
                        autoComplete="off"
                        placeholder="Dr. Med."
                        className="form-control placeholder:opacity-25 block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-3 space-x-4">
                    <label className="my-auto text-xl">Vorname:</label>
                    <div className="max-w-[230px]">
                      <input
                        value={memberFirstname}
                        onChange={(e) => setMemberFirstname(e.target.value)}
                        autoComplete="off"
                        placeholder="Chris"
                        className="form-control placeholder:opacity-25 block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between space-x-4">
                    <label className="my-auto text-xl">Nachname:</label>
                    <div className="max-w-[230px]">
                      <input
                        value={memberLastname}
                        onChange={(e) => setMemberLastname(e.target.value)}
                        autoComplete="off"
                        placeholder="Roberts"
                        className="form-control placeholder:opacity-25 w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">
                    Sicherheit:
                  </p>
                  <div className="flex justify-between space-x-4">
                    <label className="my-auto text-xl">Passwort:</label>
                    <div className="max-w-[230px]">
                      <input
                        value={memberPassword}
                        onChange={(e) => setMemberPassword(e.target.value)}
                        autoComplete="off"
                        placeholder="Passwort..."
                        className="disabled:opacity-25 form-control placeholder:opacity-25 w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                      {memberPassword != null && memberPassword != '' && (
                        <p className="text-[0.6rem] opacity-50">
                          Das Standardpassword wird zu dem oben festgelegten
                          geändert.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">Abteilung:</p>
                  <div className="flex">
                    <div className="flex my-auto mr-auto space-x-4">
                      <div>
                        <Checkbox
                          state={abteilungsLeiter}
                          setState={setAbteilungsleiter}
                          id="c-1"
                          color="primary"
                          bg="[#111]"
                          name="group"
                          value="private"
                        >
                          <Checkbox.Label>Abteilungsleiter</Checkbox.Label>
                          <Checkbox.Indicator />
                        </Checkbox>
                      </div>
                    </div>
                    <div className="w-full ml-4">
                      <Dropdown
                        items={departments}
                        state={selectedDepartment}
                        setState={setSelectedDepartment}
                        mode="departments"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">Rollen:</p>
                  <div className="flex">
                    <div className="flex flex-wrap my-auto mr-auto space-y-4">
                      <div className="flex w-full">
                        <div className="ml-auto mr-[50%]">
                          <Checkbox
                            state={contentCheckbox}
                            setState={setContentCheckbox}
                            id="c-5"
                            color="primary"
                            bg="[#111]"
                            name="group"
                            value="private"
                          >
                            <Checkbox.Label>Inhaltsersteller</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="ml-auto mr-[50%]">
                          <Checkbox
                            state={recruitingCheckbox}
                            setState={setRecruitingCheckbox}
                            id="c-3"
                            color="primary"
                            bg="[#111]"
                            name="group"
                            value="private"
                          >
                            <Checkbox.Label>Rekrutierung</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="ml-auto mr-[50%]">
                          <Checkbox
                            state={marketingCheckbox}
                            setState={setMarketingCheckbox}
                            id="c-4"
                            color="primary"
                            bg="[#111]"
                            name="group"
                            value="private"
                          >
                            <Checkbox.Label>Marketing & Presse</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">
                    Positionsstufe:
                  </p>
                  <div className="flex justify-between space-x-4">
                    <label className="my-auto text-xl">Position:</label>
                    <div className="max-w-[230px] w-full">
                      <Dropdown
                        items={position_levels}
                        state={selectedPosition}
                        setState={setSelectedPosition}
                        mode="position_level"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">Status:</p>
                  <div className="flex">
                    <div className="flex justify-between w-full px-6 my-auto mr-auto">
                      <div>
                        <RadioButton
                          state={selectedStatus}
                          setState={setSelectedStatus}
                          id="c-6"
                          color="white"
                          bg="[#111]"
                          name="status"
                          value="draft"
                        >
                          <RadioButton.Label>Entwurf</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                      <div>
                        <RadioButton
                          state={selectedStatus}
                          setState={setSelectedStatus}
                          id="c-7"
                          color="green-500"
                          bg="[#111]"
                          name="status"
                          value="published"
                        >
                          <RadioButton.Label>Öffentlich</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
                {session.user?.role ==
                  '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb' && (
                  <>
                    <div className="mt-6">
                      <p className="w-full -ml-4 text-base text-left text-red-600">
                        ADMIN OPTIONEN:
                      </p>
                      <div className="flex">
                        <div className="flex flex-wrap my-auto mr-auto space-y-4">
                          <div className="flex w-full">
                            <div className="ml-auto">
                              <Checkbox
                                state={adminCheckbox}
                                setState={setAdminCheckbox}
                                id="c-8"
                                color="red-500"
                                bg="[#111]"
                                name="group"
                                value="private"
                              >
                                <Checkbox.Label>Admin</Checkbox.Label>
                                <Checkbox.Indicator />
                              </Checkbox>
                              {adminCheckbox && (
                                <p className="text-[0.7rem] opacity-95 text-red-500">
                                  ACHTUNG: ADMINISTRATOREN KÖNNEN JEGLICHE
                                  ÄNDERUNGEN IN DER GESAMTEN ARISCORP DATENBANK
                                  VORNEHMEN!!!
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className="w-full mt-8 space-x-12">
                  <DefaultButton animate danger action={() => closeModal()}>
                    Abbruch
                  </DefaultButton>
                  <DefaultButton animate agree action={() => addMember()}>
                    Speichern!
                  </DefaultButton>
                </div>
              </div>
            )}
            {modalType == 'editMember' && (
              <div className="px-8">
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">
                    Basis Daten:
                  </p>
                  <div className="flex justify-between mb-3 space-x-4">
                    <label className="my-auto text-xl">Titel:</label>
                    <div className="max-w-[230px]">
                      <input
                        value={memberTitle}
                        onChange={(e) => setMemberTitle(e.target.value)}
                        autoComplete="off"
                        placeholder="Dr. Med."
                        disabled={
                          session.user?.role !=
                          '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
                        }
                        className="form-control placeholder:opacity-25 block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-3 space-x-4">
                    <label className="my-auto text-xl">Vorname:</label>
                    <div className="max-w-[230px]">
                      <input
                        value={memberFirstname}
                        onChange={(e) => setMemberFirstname(e.target.value)}
                        autoComplete="off"
                        placeholder="Chris"
                        disabled={
                          session.user?.role !=
                          '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
                        }
                        className="form-control placeholder:opacity-25 block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mb-3 space-x-4">
                    <label className="my-auto text-xl">Nachname:</label>
                    <div className="max-w-[230px]">
                      <input
                        value={memberLastname}
                        onChange={(e) => setMemberLastname(e.target.value)}
                        placeholder="Roberts"
                        disabled={
                          session.user?.role !=
                          '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
                        }
                        className="form-control placeholder:opacity-25 w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between space-x-4">
                    <label className="my-auto text-xl">Avatar:</label>
                    <div className="max-w-[230px]">
                      <input
                        onChange={handleAvatarUpload}
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        disabled={
                          session.user?.role !=
                          '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
                        }
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">
                    Sicherheit:
                  </p>
                  <div className="flex">
                    <div className="flex my-auto mr-auto space-x-4">
                      <div onClick={() => setMemberPassword('')}>
                        <Checkbox
                          disabled={
                            session.user?.role !=
                            '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
                          }
                          state={passwordReset}
                          setState={setPasswordReset}
                          id="c-0"
                          color="red-500"
                          bg="[#111]"
                        >
                          <Checkbox.Label>Passwort zurücksetzen</Checkbox.Label>
                          <Checkbox.Indicator />
                        </Checkbox>
                      </div>
                    </div>
                    <div className="w-full ml-4">
                      <input
                        value={memberPassword}
                        onChange={(e) => setMemberPassword(e.target.value)}
                        autoComplete="off"
                        placeholder="Neues Passwort..."
                        type="password"
                        disabled={
                          passwordReset ||
                          session.user?.role !=
                            '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
                        }
                        className="disabled:opacity-25 form-control placeholder:opacity-25 w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                      />
                      {passwordReset && (
                        <p className="text-[0.6rem] opacity-50">
                          Das Passwort wird auf den Standardwert zurückgesetzt:
                          &quot;vorname(n).nachname&quot;
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">Abteilung:</p>
                  <div className="flex">
                    <div className="flex my-auto mr-auto space-x-4">
                      <div>
                        <Checkbox
                          state={abteilungsLeiter}
                          setState={setAbteilungsleiter}
                          id="c-1"
                          color="primary"
                          bg="[#111]"
                          name="group"
                          value="private"
                        >
                          <Checkbox.Label>Abteilungsleiter</Checkbox.Label>
                          <Checkbox.Indicator />
                        </Checkbox>
                      </div>
                    </div>
                    <div className="w-full ml-4">
                      <Dropdown
                        disabled={
                          session.user?.role !=
                          '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb'
                        }
                        items={departments}
                        state={selectedDepartment}
                        setState={setSelectedDepartment}
                        mode="departments"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">Rollen:</p>
                  <div className="flex">
                    <div className="flex flex-wrap my-auto mr-auto space-y-4">
                      <div className="flex w-full">
                        <div className="ml-auto mr-[50%]">
                          <Checkbox
                            state={contentCheckbox}
                            setState={setContentCheckbox}
                            id="c-5"
                            color="primary"
                            bg="[#111]"
                            name="group"
                            value="private"
                          >
                            <Checkbox.Label>Inhaltsersteller</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="ml-auto mr-[50%]">
                          <Checkbox
                            state={recruitingCheckbox}
                            setState={setRecruitingCheckbox}
                            id="c-3"
                            color="primary"
                            bg="[#111]"
                            name="group"
                            value="private"
                          >
                            <Checkbox.Label>Rekrutierung</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="ml-auto mr-[50%]">
                          <Checkbox
                            state={marketingCheckbox}
                            setState={setMarketingCheckbox}
                            id="c-4"
                            color="primary"
                            bg="[#111]"
                            name="group"
                            value="private"
                          >
                            <Checkbox.Label>Marketing & Presse</Checkbox.Label>
                            <Checkbox.Indicator />
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">
                    Positionsstufe:
                  </p>
                  <div className="flex justify-between space-x-4">
                    <label className="my-auto text-xl">Position:</label>
                    <div className="max-w-[230px] w-full">
                      <Dropdown
                        items={position_levels}
                        state={selectedPosition}
                        setState={setSelectedPosition}
                        mode="position_level"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="w-full -ml-4 text-base text-left">Status:</p>
                  <div className="flex">
                    <div className="flex justify-between w-full px-6 my-auto mr-auto">
                      <div>
                        <RadioButton
                          state={selectedStatus}
                          setState={setSelectedStatus}
                          id="c-6"
                          color="white"
                          bg="[#111]"
                          name="status"
                          value="draft"
                        >
                          <RadioButton.Label>Entwurf</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                      <div>
                        <RadioButton
                          state={selectedStatus}
                          setState={setSelectedStatus}
                          id="c-7"
                          color="green-500"
                          bg="[#111]"
                          name="status"
                          value="published"
                        >
                          <RadioButton.Label>Öffentlich</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
                {session.user?.role ==
                  '767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb' && (
                  <>
                    <div className="mt-6">
                      <p className="w-full -ml-4 text-base text-left text-red-600">
                        ADMIN OPTIONEN:
                      </p>
                      <div className="flex">
                        <div className="flex flex-wrap my-auto mr-auto space-y-4">
                          <div className="flex w-full">
                            <div className="ml-auto">
                              <Checkbox
                                state={adminCheckbox}
                                setState={setAdminCheckbox}
                                id="c-8"
                                color="red-500"
                                bg="[#111]"
                                name="group"
                                value="private"
                              >
                                <Checkbox.Label>Admin</Checkbox.Label>
                                <Checkbox.Indicator />
                              </Checkbox>
                              {adminCheckbox && (
                                <p className="text-[0.7rem] opacity-95 text-red-500">
                                  ACHTUNG: ADMINISTRATOREN KÖNNEN JEGLICHE
                                  ÄNDERUNGEN IN DER GESAMTEN ARISCORP DATENBANK
                                  VORNEHMEN!!!
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className="w-full mt-8 space-x-12">
                  <DefaultButton animate danger action={() => closeModal()}>
                    Abbruch
                  </DefaultButton>
                  <DefaultButton animate agree action={() => saveMemberEdit()}>
                    Speichern!
                  </DefaultButton>
                </div>
              </div>
            )}
            {modalType == 'editHangar' && (
              <div className="px-8">
                <div className="mt-6">
                  <div className="w-full mx-auto">
                    <ul className="text-left list-none">
                      <AnimatePresence mode="wait">
                        <motion.ul className="list-none">
                          {modalStore.ships
                            .filter((e) =>
                              selectedShip ? e == selectedShip : e != null
                            )
                            .map(
                              (ship) =>
                                !addMenu && (
                                  <motion.li
                                    key={ship.id}
                                    initial={{ height: 0 }}
                                    animate={{
                                      height: !ship.name ? '28px' : '52px',
                                    }}
                                    exit={{ height: 0 }}
                                    className="flex w-full mb-2 list-none"
                                  >
                                    <div>
                                      <span className="block">
                                        {ship.ships_id.manufacturer.firmen_name}{' '}
                                        - {ship.ships_id.name}
                                        {ship.name ? ':' : ''}
                                      </span>
                                      <span>
                                        {ship.name ? '"' + ship.name + '"' : ''}
                                      </span>
                                    </div>
                                    <div className="right-0 flex ml-auto space-x-2 cursor-pointer">
                                      {!selectedShip && (
                                        <PencilSquareIcon
                                          onClick={() => modalEditShip(ship)}
                                          className="w-4 transition-all duration-200 opacity-50 text-primary hover:opacity-100 hover:duration-300"
                                        />
                                      )}
                                      {selectedShip && (
                                        <ArrowUturnLeftIcon
                                          onClick={() => setSelectedShip()}
                                          className="w-4 transition-all duration-200 opacity-50 text-primary hover:opacity-100 hover:duration-300"
                                        />
                                      )}
                                      <BsTrash
                                        onClick={() => shipRemoval(ship)}
                                        className="w-4 my-auto text-red-500 transition-all duration-200 opacity-50 hover:opacity-100 hover:duration-300"
                                      />
                                    </div>
                                  </motion.li>
                                )
                            )}
                        </motion.ul>
                        {selectedShip && !shipForRemoval && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: '298px' }}
                            exit={{ height: 0 }}
                          >
                            <div className="mt-6">
                              <p className="w-full -ml-4 text-base text-left">
                                Basis Daten:
                              </p>
                              <div className="flex justify-between mb-3 space-x-4">
                                <label className="my-auto text-xl">Name:</label>
                                <input
                                  value={shipName}
                                  onChange={(e) => setShipName(e.target.value)}
                                  autoComplete="off"
                                  placeholder="Name..."
                                  className="form-control block w-full max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                                />
                              </div>
                              <div className="flex justify-between space-x-4">
                                <label className="my-auto text-xl">S/N:</label>
                                <input
                                  value={shipSerial}
                                  onChange={(e) =>
                                    setShipSerial(e.target.value)
                                  }
                                  autoComplete="off"
                                  placeholder="Seriennummer..."
                                  className="form-control w-full block max-w-[286px] px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none"
                                />
                              </div>
                            </div>
                            <div className="mt-6">
                              <p className="w-full -ml-4 text-base text-left">
                                Einteilung:
                              </p>
                              <div className="flex">
                                <div className="flex my-auto mr-auto space-x-4">
                                  <div onClick={() => setSelectedDepartment()}>
                                    <RadioButton
                                      state={selectedGroup}
                                      setState={setSelectedGroup}
                                      id="c-1"
                                      color="secondary"
                                      bg="[#111]"
                                      name="group"
                                      value="private"
                                    >
                                      <RadioButton.Label>
                                        Privat
                                      </RadioButton.Label>
                                      <RadioButton.Indicator />
                                    </RadioButton>
                                  </div>
                                  <div>
                                    <RadioButton
                                      state={selectedGroup}
                                      setState={setSelectedGroup}
                                      id="c-2"
                                      color="primary"
                                      bg="[#111]"
                                      name="group"
                                      value="ariscorp"
                                    >
                                      <RadioButton.Label>
                                        ArisCorp
                                      </RadioButton.Label>
                                      <RadioButton.Indicator />
                                    </RadioButton>
                                  </div>
                                </div>
                                <div className="w-full ml-4">
                                  <Dropdown
                                    items={departments}
                                    state={selectedDepartment}
                                    setState={setSelectedDepartment}
                                    mode="departments"
                                    disabled={
                                      selectedGroup == 'private' && true
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap w-full mt-6">
                              <p className="w-full -ml-4 text-base text-left">
                                Sichtbarkeit:
                              </p>
                              <div className="mx-auto">
                                <div className="flex my-auto space-x-4">
                                  <div className="ml-auto">
                                    <RadioButton
                                      state={selectedVisibility}
                                      setState={setSelectedVisibility}
                                      id="c-4"
                                      color="green-500"
                                      bg="[#111]"
                                      name="visibility"
                                      value="public"
                                    >
                                      <RadioButton.Label>
                                        Öffentlich
                                      </RadioButton.Label>
                                      <RadioButton.Indicator />
                                    </RadioButton>
                                  </div>
                                  <div className="ml-auto">
                                    <RadioButton
                                      state={selectedVisibility}
                                      setState={setSelectedVisibility}
                                      id="c-3"
                                      color="primary"
                                      bg="[#111]"
                                      name="visibility"
                                      value="internal"
                                    >
                                      <RadioButton.Label>
                                        Nur Intern
                                      </RadioButton.Label>
                                      <RadioButton.Indicator />
                                    </RadioButton>
                                  </div>
                                  <div className="ml-auto">
                                    <RadioButton
                                      state={selectedVisibility}
                                      setState={setSelectedVisibility}
                                      id="c-5"
                                      color="secondary"
                                      bg="[#111]"
                                      name="visibility"
                                      value="hidden"
                                    >
                                      <RadioButton.Label>
                                        Versteckt
                                      </RadioButton.Label>
                                      <RadioButton.Indicator />
                                    </RadioButton>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </ul>
                  </div>
                </div>
                {selectedShip && !shipForRemoval && (
                  <div className="w-full mt-8 space-x-12">
                    <DefaultButton
                      animate
                      danger
                      action={() => setSelectedShip()}
                    >
                      Abbruch
                    </DefaultButton>
                    <DefaultButton
                      animate
                      agree
                      action={() => saveMemberShipEdit()}
                    >
                      Speichern!
                    </DefaultButton>
                  </div>
                )}
                {selectedShip && shipForRemoval && (
                  <div className="w-full mt-8">
                    <h3>
                      Bist du sicher, das du dieses Schiff aus dem Hangar von
                      &quot;
                      {(modalStore?.title ? modalStore?.title : '') +
                        ' ' +
                        modalStore?.firstname +
                        ' ' +
                        modalStore?.lastname}
                      &quot; entfernen möchtest?
                    </h3>
                    <div className="w-full mt-8 space-x-12">
                      <DefaultButton
                        animate
                        danger
                        action={() => setSelectedShip() + setShipForRemoval()}
                      >
                        Nein!
                      </DefaultButton>
                      <DefaultButton animate agree action={removeShip}>
                        Ja!
                      </DefaultButton>
                    </div>
                  </div>
                )}
                {addMenu && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height:
                        selectedShips.length > 0
                          ? `${selectedShips.length * 28 + 102}px`
                          : '90px',
                    }}
                    exit={{ height: 0 }}
                    className="flex flex-wrap justify-center mb-8"
                  >
                    <MultipleCombobox
                      multiple
                      items={shipList}
                      state={selectedShips}
                      setState={setSelectedShips}
                    />
                    <div className="w-full mt-4 space-x-12">
                      <DefaultButton
                        animate
                        danger
                        action={() => setSelectedShips([]) + setAddMenu(false)}
                      >
                        Abbruch
                      </DefaultButton>
                      <DefaultButton
                        animate
                        agree
                        action={() => addShips(selectedShips)}
                      >
                        Hinzufügen!
                      </DefaultButton>
                    </div>
                  </motion.div>
                )}
                <div className="w-full mt-8 space-x-12">
                  <DefaultButton animate danger action={closeModal}>
                    Close
                  </DefaultButton>
                  {!addMenu && (
                    <DefaultButton
                      animate
                      agree
                      action={() => setSelectedShip() + setAddMenu(true)}
                    >
                      Hinzufügen
                    </DefaultButton>
                  )}
                </div>
              </div>
            )}
            {modalType == 'removeMember' && (
              <div className="px-8">
                <h3>
                  Bist du sicher, das du dieses Mitglied entfernen möchtest?
                </h3>
                <div className="w-full mt-8 space-x-12">
                  <DefaultButton animate agree action={closeModal}>
                    Nein!
                  </DefaultButton>
                  <DefaultButton animate danger action={removeMember}>
                    Ja!
                  </DefaultButton>
                </div>
              </div>
            )}
            {modalType == 'help' && (
              <div className="px-8">
                {activeTab == 0 && (
                  <div>
                    <div>
                      <p>
                        Hier kanst du die Charaktere der Mitarbeiter erstellen
                        und anpassen.
                      </p>
                      <p>Bitte beachte folgende Dinge:</p>
                      <ul>
                        <li>
                          Als Verwaltungsmitglied kannst du aus
                          Sicherheitsgründen nur die Rollen und den
                          Abteilungsleiter-Status anpassen.
                        </li>
                        <li>
                          <div>
                            Wenn du einen Mitarbeiter erstellst, bekommt dieser
                            ein Standardpassword. Er sollte es schnellstmöglich
                            ändern.
                          </div>
                          <div className="text-primary">
                            Info: Das Standardpasswort ist der Benutzername
                            (vorname.nachname)
                          </div>
                        </li>
                        <li className="text-red-500">
                          Warnung: Wenn du einen Mitarbeiter erstellst ist dies
                          dauerhaft!
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {activeTab == 1 && (
                  <div>
                    <div>
                      <p>
                        Hier kannst du die Hangare von jedem Mitarbeiter
                        anpassen.
                      </p>
                      <p>Bitte beachte folgende Dinge:</p>
                      <ul>
                        <li className="text-red-500">
                          Jede Anpassung ist dauerhaft!
                        </li>
                        <li>
                          Du solltest jederzeit Rücksprache mit dem Mitarbeiter
                          halten, dessen Hangar du bearbeiten möchtest
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
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
          <Tab.Group
            selectedIndex={activeTab}
            onChange={(event) =>
              replace({ query: { tab: event } }, undefined, {
                shallow: true,
              }) + setActiveTab(event)
            }
            as={Fragment}
          >
            <div className="w-full lg:space-x-6 lg:flex">
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
                    <h3 className="text-secondary">{data.name}</h3>
                    <div className="w-full">{data.content}</div>
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
