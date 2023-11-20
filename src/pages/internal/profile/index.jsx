import ArisCorpGlowLogo from 'components/icons/ArisCorpGlowLogo'
import ProtectedLayout from "../layout"
import { MdKeyboardReturn } from 'react-icons/md';
import { useEffect, useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { AtSymbolIcon, MapPinIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Checkbox from 'components/Checkbox';
import Dropdown from 'components/Dropdown';
import Head from 'next/head';
import client from 'apollo/clients';
import { GET_GAMEPLAYS, GET_VERSEEXKURS_SYSTEME } from 'graphql/queries';
import DefaultButton from 'components/DefaultButton';
import Modal from 'components/modal';
import Link from 'next/link';
import RadioButton from 'components/RadioButton';
import moment from 'moment';
import MultipleCombobox from 'components/MultipleCombobox';
import { AnimatePresence, motion } from 'framer-motion';
import { FaRegAddressBook } from 'react-icons/fa'
import { Editor } from '@tinymce/tinymce-react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'
import "./style.css"
import { BasicPanel } from 'components/panels';

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
  const { data: gameplayData } = await client.query({ query: GET_GAMEPLAYS })
  const { data: systemData } = await client.query({ query: GET_VERSEEXKURS_SYSTEME })

  const systemList = systemData.systeme.sort((a, b) => a.name.localeCompare(b.name))

  const siteTitle = "Mein Profil - ArisCorp Management System"

  return {
    props: {
      systems: systemList,
      departments: gameplayData.gameplays,
      siteTitle
    },
  }
}

export default function InternalIndex ({ departments, systems, siteTitle }) {
  const { data: session } = useSession()
  const [data, setData] = useState({})
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [title, setTitle] = useState("")
  const [password, setPassword] = useState("")
  const [recruitingCheckbox, setRecruitingCheckbox] = useState(false)
  const [marketingCheckbox, setMarketingCheckbox] = useState(false)
  const [contentCheckbox, setContentCheckbox] = useState(false)
  const [abteilungsLeiter, setAbteilungsleiter] = useState()
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [modal, setModal] = useState(false)
  const [modalType, setModalType] = useState()
  const [sex, setSex] = useState()
  const [birthdate, setBirthdate] = useState()
  const [birthSystem, setBirthSystem] = useState()
  const [birthplace, setBirthplace] = useState()
  const [currentSystem, setCurrentSystem] = useState()
  const [currentPlace, setCurrentPlace] = useState()
  const [haircolor, setHaircolor] = useState()
  const [height, setHeight] = useState()
  const [eyecolor, setEyecolor] = useState()
  const [weight, setWeight] = useState()
  const [citizenState, setCitizenState] = useState()
  const [citizenReason, setCitizenReason] = useState()
  const [dutyPeriod, setDutyPeriod] = useState()
  const [dutyReason, setDutyReason] = useState()
  const [dutyInfos, setDutyInfos] = useState()
  const [educationName, setEducationName] = useState()
  const [educationPeriod, setEducationPeriod] = useState()
  const [educationPlace, setEducationPlace] = useState()
  const [hobbys, setHobbys] = useState()
  const [activities, setActivities] = useState()
  const [talents, setTalents] = useState()
  const [habits, setHabits] = useState()
  const [tics, setTics] = useState()
  const [fears, setFears] = useState()
  const [character, setCharacter] = useState()
  const [secrets, setSecrets] = useState()
  const [music, setMusic] = useState()
  const [movies, setMovies] = useState()
  const [books, setBooks] = useState()
  const [clothing, setClothing] = useState()
  const [food, setFood] = useState()
  const [drink, setDrink] = useState()
  const [alcohol, setAlcohol] = useState()
  const [color, setColor] = useState()
  const [loves, setLoves] = useState()
  const [hates, setHates] = useState()
  const [medicalInformations, setMedicalInformations] = useState()
  const [avatarFile, setAvatarFile] = useState()
  const [cropper, setCropper] = useState()
  const [rawAvatarUrl, setRawAvatarUrl] = useState("");
  const [biography, setBiography] = useState()
  const [changesMade, setChangesMade] = useState()
  const handleBiographyChange = (content, editor) => {
    setBiography(content);
  }

  const handleAvatarUpload = (e) => {
    if (e.target.files) {
      setRawAvatarUrl(URL.createObjectURL(e.target.files[0]));
      setModal(true)
      setModalType("editAvatar")
    }
  };

  const handleAvatarSave = async () => {
    if (cropper) {
      const file = await fetch(cropper.getCroppedCanvas().toDataURL())
        .then((res) => res.blob())
        .then((blob) => {
          return new File([blob], (data.firstname + "-" + data.lastname + "-avatar" + ".png"), { type: "image/png" });
        });
      if (file) {
        setAvatarFile(file)
      }
    }
    closeModal()
  }

  useEffect(() => {
    if (data) {
      if (
        firstname != data.firstname ||
        lastname != data.lastname ||
        title != data.title ||
        password != "" ||
        recruitingCheckbox != (data.roles?.includes("recruitment") ? true : false) ||
        marketingCheckbox != (data.roles?.includes("marketing") ? true : false) ||
        contentCheckbox != (data.roles?.includes("content_writer") ? true : false) ||
        abteilungsLeiter != data.head_of_department ||
        selectedDepartment?.id != (abteilungsLeiter ? data.head_department[0] : data.department) ||
        sex != data.sex ||
        birthdate != data.birthdate ||
        birthSystem?.id != data.birthSystem?.id ||
        birthplace != data.birthPlace ||
        currentSystem?.id != data.currentResidenceSystem?.id ||
        currentPlace != data.currentResidence ||
        haircolor != data.hairColor ||
        height != data.height ||
        eyecolor != data.eyeColor ||
        weight != data.weight ||
        citizenState != data.ueeState ||
        citizenReason != data.citizenReason ||
        dutyPeriod != data.dutyPeriod ||
        dutyReason != data.dutyReason ||
        educationName != data.educationName ||
        educationPeriod != data.educationPeriod ||
        educationPlace != data.educationPlace ||
        hobbys != data.hobbys ||
        activities != data.activities ||
        talents != data.talents ||
        habits != data.habits ||
        tics != data.tics ||
        fears != data.fears ||
        character != data.characterTrait ||
        secrets != data.mysteriousThings ||
        music != data.music ||
        movies != data.movies ||
        books != data.books ||
        clothing != data.clothing ||
        food != data.food ||
        drink != data.drink ||
        alcohol != data.alcohol ||
        color != data.colors ||
        loves != data.loves ||
        hates != data.hates ||
        medicalInformations != data.text ||
        biography != data.biography ||
        avatarFile != null
      ) {
        setChangesMade(true)
      } else {
        setChangesMade(false)
      }
    }
  }, [
    data,
    firstname,
    lastname,
    title,
    password,
    recruitingCheckbox,
    marketingCheckbox,
    contentCheckbox,
    abteilungsLeiter,
    selectedDepartment,
    sex,
    birthdate,
    birthSystem,
    birthplace,
    currentSystem,
    currentPlace,
    haircolor,
    height,
    eyecolor,
    weight,
    citizenState,
    citizenReason,
    dutyPeriod,
    dutyReason,
    educationName,
    educationPeriod,
    educationPlace,
    hobbys,
    activities,
    talents,
    habits,
    tics,
    fears,
    character,
    secrets,
    music,
    movies,
    books,
    clothing,
    food,
    drink,
    alcohol,
    color,
    loves,
    hates,
    medicalInformations,
    biography,
    avatarFile
  ])


  async function getData (id) {
    let data = await fetch(
      "https://cms.ariscorp.de/items/member?fields=*,account.email,account.id,currentResidenceSystem.name,currentResidenceSystem.id,birthSystem.name,birthSystem.id&filter[account][_eq]=" + id,
      {
        method: "GET"
      }
    ).then((res) => res.json());

    return setData(data.data[0])
  }

  function setStates () {
    setFirstname(data.firstname)
    setLastname(data.lastname)
    setTitle(data.title)
    setPassword("")
    if (data.roles?.includes("marketing")) setMarketingCheckbox(true)
    if (data.roles?.includes("recruitment")) setRecruitingCheckbox(true)
    if (data.roles?.includes("content_writer")) setContentCheckbox(true)
    if (data.head_of_department) {
      setAbteilungsleiter(true)
      if (data.head_department) setSelectedDepartment(departments.find(e => e.id == data.head_department[0]))
    } else if (!data.head_of_department) {
      setAbteilungsleiter(false)
      if (data.department) setSelectedDepartment(departments.find(e => e.id == data.department))
    }
    setCurrentSystem(data.currentResidenceSystem)
    setCurrentPlace(data.currentResidence)
    setSex(data.sex)
    setBirthdate(data.birthdate)
    setBirthSystem(data.birthSystem)
    setBirthplace(data.birthPlace)
    setHaircolor(data.hairColor)
    setHeight(data.height)
    setEyecolor(data.eyeColor)
    setWeight(data.weight)
    setCitizenState(data.ueeState)
    setCitizenReason(data.citizenReason)
    setDutyPeriod(data.dutyPeriod)
    setDutyReason(data.dutyReason)
    setDutyInfos(data.dutyInfo)
    setEducationName(data.educationName)
    setEducationPeriod(data.educationPeriod)
    setEducationPlace(data.educationPlace)
    setHobbys(data.hobbys)
    setActivities(data.activities)
    setTalents(data.talents)
    setHabits(data.habits)
    setTics(data.tics)
    setFears(data.fears)
    setCharacter(data.characterTrait)
    setSecrets(data.mysteriousThings)
    setMusic(data.music)
    setMovies(data.movies)
    setBooks(data.books)
    setClothing(data.clothing)
    setFood(data.food)
    setDrink(data.drink)
    setAlcohol(data.alcohol)
    setColor(data.colors)
    setLoves(data.loves)
    setHates(data.hates)
    setMedicalInformations(data.text)
    setBiography(data.biography)
    setRawAvatarUrl()
    setAvatarFile()
  }

  useEffect(() => {
    if (session) {
      getData(session.user.id)
    } else {
      return
    }
  }, [session])

  useEffect(() => {
    if (data) {
      setStates()
    } else {
      return
    }
  }, [data])

  async function editMember (edits, id, accId) {
    const accountEdits = {}
    if (edits.firstname) accountEdits.first_name = edits.firstname
    if (edits.lastname) accountEdits.last_name = edits.lastname
    if (edits.title) accountEdits.title = edits.title
    if (edits.firstname || edits.lastname) accountEdits.email = (`${slugify_dot(edits.firstname || slugify_dot(firstname))}.${edits.lastname || slugify_dot(lastname)}@ariscorp.de`)
    if (edits.account?.role || edits.head_of_department) accountEdits.role = (edits.account.role ? edits.account.role : (edits.head_of_department == true || (edits.head_of_department == null && abteilungsLeiter == true) ? "767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb" : "a74700bc-7e32-4597-a1e1-34c6d7674dad"))
    if (edits.account.password != null && edits.account.password != "") {
      accountEdits.password = edits.account.password ? edits.account.password : null
    }

    if (avatarFile) {
      const formData = new FormData();
      formData.append("name", `${firstname}-${lastname}-Avatar`);
      formData.append("folder", "8658f40d-77d9-44c4-8f0d-af820855a3bc");
      formData.append("file", avatarFile);

      let resdata = await fetch(
        "https://cms.ariscorp.de/files?access_token=" + process.env.NEXT_PUBLIC_CMS_TOKEN,
        {
          method: "POST",
          body: formData
        }
      ).then((res) => res.json());

      edits.member_potrait = resdata.data.id
      accountEdits.avatar = resdata.data.id
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
    console.log(`📝 ------MEMBER EDIT - ${data.title ? data.title : ''} ${data.firstname} ${data.lastname}------`)
    const roles = []
    if (marketingCheckbox) roles.push("marketing")
    if (recruitingCheckbox) roles.push("recruitment")
    if (contentCheckbox) roles.push("content_writer")

    const edits = {
      account: {}
    }
    if (firstname != data.firstname) {
      edits.firstname = firstname
    }
    if (lastname != data.lastname) {
      edits.lastname = lastname
    }
    if (title != data.title) {
      edits.title = title
    }
    if (abteilungsLeiter != data.head_of_department) {
      edits.head_of_department = abteilungsLeiter
    }
    if ((edits.head_of_department != null ? (edits.head_of_department == true) : (data.head_of_department == true))) {
      edits.department = null
      edits.head_department = (selectedDepartment?.id ? [selectedDepartment.id] : null)
    } else if ((edits.head_of_department != null ? (edits.head_of_department == false) : (data.head_of_department == false))) {
      edits.head_department = null
      edits.department = (selectedDepartment?.id ? selectedDepartment.id : null)
    }
    if (roles != data.member_rollen) {
      edits.member_rollen = roles
    }
    if (password != null && password != "") {
      edits.account.password = password
    }
    if (currentSystem?.id != data.currentResidenceSystem?.id) {
      edits.currentResidenceSystem = currentSystem.id
    }
    if (currentPlace != data.currentResidence) {
      edits.currentResidence = currentPlace
    }
    if (sex != data.sex) {
      edits.sex = sex
    }
    if (birthdate != data.birthdate) {
      edits.birthdate = birthdate
    }
    if (birthSystem?.id != data.birthSystem?.id) {
      edits.birthSystem = birthSystem.id
    }
    if (birthplace != data.birthPlace) {
      edits.birthPlace = birthplace
    }
    if (haircolor != data.hairColor) {
      edits.hairColor = haircolor
    }
    if (height != data.height) {
      edits.height = height
    }
    if (eyecolor != data.eyeColor) {
      edits.eyeColor = eyecolor
    }
    if (weight != data.weight) {
      edits.weight = weight
    }
    if (citizenState != data.ueeState) {
      edits.ueeState = citizenState
    }
    if (citizenReason != data.citizenReason) {
      edits.citizenReason = citizenReason
    }
    if (dutyPeriod != data.dutyPeriod) {
      edits.dutyPeriod = dutyPeriod
    }
    if (dutyReason != data.dutyReason) {
      edits.dutyReason = dutyReason
    }
    if (educationName != data.educationName) {
      edits.educationName = educationName
    }
    if (educationPeriod != data.educationPeriod) {
      edits.educationPeriod = educationPeriod
    }
    if (educationPlace != data.educationPlace) {
      edits.educationPlace = educationPlace
    }
    if (hobbys != data.hobbys) {
      edits.hobbys = hobbys
    }
    if (activities != data.activities) {
      edits.activities = activities
    }
    if (talents != data.talents) {
      edits.talents = talents
    }
    if (habits != data.habits) {
      edits.habits = habits
    }
    if (tics != data.tics) {
      edits.tics = tics
    }
    if (fears != data.fears) {
      edits.fears = fears
    }
    if (character != data.characterTrait) {
      edits.characterTrait = character
    }
    if (secrets != data.mysteriousThings) {
      edits.mysteriousThings = secrets
    }
    if (music != data.music) {
      edits.music = music
    }
    if (movies != data.movies) {
      edits.movies = movies
    }
    if (books != data.books) {
      edits.books = books
    }
    if (clothing != data.clothing) {
      edits.clothing = clothing
    }
    if (food != data.food) {
      edits.food = food
    }
    if (drink != data.drink) {
      edits.drink = drink
    }
    if (alcohol != data.alcohol) {
      edits.alcohol = alcohol
    }
    if (color != data.colors) {
      edits.colors = color
    }
    if (loves != data.loves) {
      edits.loves = loves
    }
    if (hates != data.hates) {
      edits.hates = hates
    }
    if (medicalInformations != data.medicalInformations) {
      edits.medicalInformations = medicalInformations
    }
    if (medicalInformations != data.text) {
      edits.text = medicalInformations
    }
    if (biography != data.biography) {
      edits.biography = biography
    }

    console.log("📑 ---EDIT-OBJECT:---")
    console.log(edits)
    await editMember(edits, data.id, data.account.id)
    return getData(session.user.id)
  }

  function openCancelModal () {
    setModal(true)
    setModalType("cancel")
  }

  function closeModal () {
    setModal(false)
    setTimeout(() => {
      setModalType("")
    }, 600);
  }

  // border-[#222]/50 bg-[#222] border-[#222] text-green-700 text-green-400"
  return (
    <ProtectedLayout changes={changesMade}>
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
          modalType == 'cancel' && 'Änderungen löschen?' ||
          modalType == 'editAvatar' && 'Avatar anpassen:'
        }
        closeFunction={closeModal}
      >
        <div className='mb-2'>
          {modalType == 'cancel' &&
            <div className='px-8'>
              <h3>Bist du sicher, dass du die Änderungen löschen möchtest?</h3>
              <div className='w-full mt-8 space-x-12'>
                <DefaultButton animate agree action={closeModal}>
                  Nein!
                </DefaultButton>
                <DefaultButton animate danger action={() => setStates() + closeModal()}>
                  Ja!
                </DefaultButton>
              </div>
            </div>
          }
          {modalType == 'editAvatar' &&
            <div className='px-8'>
              <div>
                <div className='flex justify-center overflow-hidden'>
                  <BasicPanel classes={"overflow-hidden"}>
                    <Cropper
                      src={rawAvatarUrl}
                      style={{ height: 320, width: 270, overflow: "hidden" }}
                      minCropBoxHeight={320}
                      minCropBoxWidth={270}
                      guides={true}
                      checkOrientation={false}
                      dragMode='move'
                      onInitialized={(instance) => {
                        setCropper(instance);
                      }}
                    />
                  </BasicPanel>
                </div>
              </div>
              <div className='w-full mt-8 space-x-12'>
                <DefaultButton animate danger action={() => setStates() + closeModal()}>
                  Schließen!
                </DefaultButton>
                <DefaultButton animate agree action={handleAvatarSave}>
                  Speichern!
                </DefaultButton>
              </div>
            </div>
          }
        </div>
      </Modal>
      <div className='py-8'>
        <div className='bg-[#222] flex items-center p-5 rounded-lg mb-5 relative'>
          <div className='flex mr-6 overflow-hidden rounded-full border-white border-[6px] h-36 w-36 bg-center bg-no-repeat bg-cover focus:outline-none group bg-white/5' style={{ backgroundImage: `url(https://cms.ariscorp.de/assets/${data.member_potrait}?height=400)` }} />
          <div className='flex-1 overflow-hidden outline-none'>
            <div className='text-base font-bold text-white whitespace-nowrap'>{data.title && data.title} {data.firstname} {data.lastname}</div>
            <div className='text-[#444] items-center flex space-x-1'>
              <AtSymbolIcon className='relative inline-block w-[18px] h-[18px] my-auto' />
              <span className='my-auto'>{data.account?.email}</span>
            </div>
            <div className='text-[#444] items-center flex space-x-1'>
              <MapPinIcon className='relative inline-block w-[18px] h-[18px] my-auto' />
              <span className='my-auto'><Link href={'/VerseExkurs/starmap/' + data.currentResidenceSystem?.name.toLowerCase()} className='transition-all duration-200 opacity-75 decoration-transparent hover:opacity-100 hover:duration-300'>{data.currentResidenceSystem?.name}</Link> / {data.currentResidence}</span>
            </div>
            <div className='text-[#444] items-center flex space-x-1 absolute bottom-4'>
              <FaRegAddressBook className='relative inline-block w-[18px] h-[18px] my-auto' />
              <span className='my-auto'><Link href={'/biografie/' + slugify(firstname + '-' + lastname)} className='transition-all duration-200 opacity-75 decoration-transparent hover:opacity-100 hover:duration-300 text-primary'>Biografie</Link></span>
            </div>
          </div>
        </div>
        <div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Vorname:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={firstname}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Chris..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Nachname:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={lastname}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Roberts..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Titel:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={title}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Dr. Med...."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Passwort:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={password}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="*********"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <hr className='relative mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary' />
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className=''>
              <p className='w-full -ml-4 text-base text-left'>Rollen:</p>
              <div className='flex'>
                <div className="flex flex-wrap my-auto mr-auto space-y-4">
                  <div className='flex w-full'>
                    <div className='ml-auto mr-[50%]'>
                      <Checkbox disabled state={recruitingCheckbox} setState={setRecruitingCheckbox} id="c-3" color="primary" bg="[#222]" name="group" value="private">
                        <Checkbox.Label>Rekrutierung</Checkbox.Label>
                        <Checkbox.Indicator />
                      </Checkbox>
                    </div>
                  </div>
                  <div className='flex w-full'>
                    <div className='ml-auto mr-[50%]'>
                      <Checkbox disabled state={marketingCheckbox} setState={setMarketingCheckbox} id="c-4" color="primary" bg="[#222]" name="group" value="private">
                        <Checkbox.Label>Marketing & Presse</Checkbox.Label>
                        <Checkbox.Indicator />
                      </Checkbox>
                    </div>
                  </div>
                  <div className='flex w-full'>
                    <div className='ml-auto mr-[50%]'>
                      <Checkbox disabled state={contentCheckbox} setState={setContentCheckbox} id="c-5" color="primary" bg="[#222]" name="group" value="private">
                        <Checkbox.Label>Inhaltsersteller</Checkbox.Label>
                        <Checkbox.Indicator />
                      </Checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-between w-1/2 mb-3 h-fit'>
              <div className='basis-full'>
                <p className='w-full -ml-4 text-base text-left'>Abteilung:</p>
                <div className='flex'>
                  <div className="flex my-auto mr-auto space-x-4">
                    <div>
                      <Checkbox disabled state={abteilungsLeiter} setState={setAbteilungsleiter} id="c-1" color="primary" bg="[#222]" name="group" value="private">
                        <Checkbox.Label>Abteilungsleiter</Checkbox.Label>
                        <Checkbox.Indicator />
                      </Checkbox>
                    </div>
                  </div>
                  <div className='w-full ml-4'>
                    <Dropdown items={departments} state={selectedDepartment} setState={setSelectedDepartment} mode="departments" bg="[#222]" />
                  </div>
                </div>
              </div>
              <div className='flex justify-between w-full mt-3 mb-3 space-x-4 basis-full lg:w-1/2'>
                <label className='my-auto text-xl'>Avatar:</label>
                <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                  <input
                    onChange={handleAvatarUpload}
                    autoComplete={false} autoCorrect={false}
                    type='file'
                    accept='image/png, image/jpeg, image/webp'
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex mt-12 mb-4'>
            <span className='inline-block mr-4 text-xl min-w-fit'>Biografie & Steckbrief</span><hr className='relative inline-block mt-3 mb-2 -ml-1 col-span-full sm:mt-3 sm:mb-2 bg-bg-secondary before:w-1 before:aspect-square before:absolute before:inline-block before:bg-primary after:w-1 after:right-0 after:aspect-square after:absolute after:inline-block after:bg-primary' />
          </div>
          <p className='w-full mt-4'>Aktueller Wohnsitz:</p>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>System:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <MultipleCombobox items={systems} state={currentSystem} bg="[#222]" setState={setCurrentSystem} />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Ort:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={currentPlace}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setCurrentPlace(e.target.value)}
                  placeholder="ArcCorp / Area 18"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <p className='w-full mt-4'>Grundinformationen:</p>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Geschlecht:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <div className="flex my-auto mr-auto space-x-4">
                  <div>
                    <RadioButton state={sex} setState={setSex} id="c-6" color="primary" bg="[#222]" name="sex" value="male">
                      <RadioButton.Label>Männlich</RadioButton.Label>
                      <RadioButton.Indicator />
                    </RadioButton>
                  </div>
                  <div>
                    <RadioButton state={sex} setState={setSex} id="c-7" color="primary" bg="[#222]" name="sex" value="female">
                      <RadioButton.Label>Weiblich</RadioButton.Label>
                      <RadioButton.Indicator />
                    </RadioButton>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Geburtsdatum:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={birthdate}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setBirthdate(e.target.value)}
                  placeholder={moment().add(930, 'years').locale("de").format('DD.MM.YYYY')}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Geb. System:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <MultipleCombobox items={systems} state={birthSystem} bg="[#222]" setState={setBirthSystem} />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Geb. Ort:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={birthplace}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setBirthplace(e.target.value)}
                  placeholder="ArcCorp / Area 18"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Haarfarbe:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={haircolor}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setHaircolor(e.target.value)}
                  placeholder="Schwarz/Grau"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Größe <span className='text-sm'>(in CM)</span>:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={height}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="185"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Augenfarbe:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={eyecolor}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setEyecolor(e.target.value)}
                  placeholder="Braun"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Gewicht <span className='text-sm'>(in Kg)</span>:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={weight}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="85"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <p className='w-full mt-4'>Bürgerstatus:</p>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Aktueller Status:</label>
              <div className="flex my-auto mr-auto space-x-4">
                <div>
                  <RadioButton state={citizenState} setState={setCitizenState} id="c-8" color="primary" bg="[#222]" name="citizenState" value="citizen">
                    <RadioButton.Label>Bürger (Citizen)</RadioButton.Label>
                    <RadioButton.Indicator />
                  </RadioButton>
                </div>
                <div>
                  <RadioButton state={citizenState} setState={setCitizenState} id="c-9" color="secondary" bg="[#222]" name="citizenState" value="civilian">
                    <RadioButton.Label>Zivilist</RadioButton.Label>
                    <RadioButton.Indicator />
                  </RadioButton>
                </div>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {citizenState == "citizen" && (
              <motion.div initial={{ height: 0 }} animate={{ height: "68px" }} exit={{ height: 0 }} className='overflow-hidden'>
                <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
                  <div className='flex flex-wrap justify-between w-full mb-3 space-x-4'>
                    <label className='w-full my-auto text-xl'>Warum bist du Bürger?</label>
                    <div className="flex my-auto mr-auto space-x-4">
                      <div>
                        <RadioButton state={citizenReason} setState={setCitizenReason} id="c-10" color="green-700" bg="[#222]" name="citizenReason" value="military">
                          <RadioButton.Label>Durch einen Militärischen Dienst</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                      <div>
                        <RadioButton state={citizenReason} setState={setCitizenReason} id="c-11" color="primary" bg="[#222]" name="citizenReason" value="education">
                          <RadioButton.Label>Durch besondere Bildung</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                      <div>
                        <RadioButton state={citizenReason} setState={setCitizenReason} id="c-12" color="green-400" bg="[#222]" name="citizenReason" value="social">
                          <RadioButton.Label>Durch soziales En­ga­ge­ment</RadioButton.Label>
                          <RadioButton.Indicator />
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {citizenState == "citizen" && citizenReason == "military" && (
              <motion.div initial={{ height: 0 }} animate={{ height: "163px" }} exit={{ height: 0 }} className='overflow-hidden'>
                <p className='w-full mt-2 ml-4'>Dienstliche Informationen:</p>
                <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
                  <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
                    <label className='mt-[5px] text-xl'>Dienstzeit:</label>
                    <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                      <input
                        value={dutyPeriod}
                        autoComplete={false} autoCorrect={false}
                        onChange={(e) => setDutyPeriod(e.target.value)}
                        placeholder={`${moment().add(929, 'years').add(11, 'months').locale("de").format('MM/YY')} - ${moment().add(930, 'years').locale("de").format('MM/YY')}`}
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                    </div>
                  </div>
                  <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
                    <label className='mt-[5px] text-xl'>Ende?</label>
                    <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                      <input
                        value={dutyReason}
                        autoComplete={false} autoCorrect={false}
                        onChange={(e) => setDutyReason(e.target.value)}
                        placeholder="Dienst quittiert"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                      <p className='text-xs'>Wie wurde deine Dienstzeit beendet?</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {citizenState == "citizen" && citizenReason == "education" && (
              <motion.div initial={{ height: 0 }} animate={{ height: "270px" }} exit={{ height: 0 }} className='overflow-hidden'>
                <p className='w-full mt-2 ml-4'>Informationen zu deinem Bildungsweg:</p>
                <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
                  <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
                    <label className='mt-[5px] text-xl'>Name:</label>
                    <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                      <input
                        value={educationName}
                        autoComplete={false} autoCorrect={false}
                        onChange={(e) => setEducationName(e.target.value)}
                        placeholder="Medizin Studium"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                      <p className='text-xs'>Wie heißt deine Ausbildung/Studium</p>
                    </div>
                  </div>
                  <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
                    <label className='mt-[5px] text-xl'>Dauer:</label>
                    <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                      <input
                        value={educationPeriod}
                        autoComplete={false} autoCorrect={false}
                        onChange={(e) => setEducationPeriod(e.target.value)}
                        placeholder={`${moment().add(929, 'years').add(11, 'months').locale("de").format('MM/YY')} - ${moment().add(930, 'years').locale("de").format('MM/YY')}`}
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                      <p className='text-xs'>In welchem Zeitraum hast du deine Ausbildung/Studiengang absolviert?</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-wrap justify-between w-full px-8 lg:flex-nowrap'>
                  <div className='flex justify-between w-full mb-3 space-x-4'>
                    <label className='mt-[5px] text-xl'>Ort:</label>
                    <div className='w-8/12 lg:w-full'>
                      <input
                        value={educationPlace}
                        autoComplete={false} autoCorrect={false}
                        onChange={(e) => setEducationPlace(e.target.value)}
                        placeholder="Medizinische Fakultät in Terra"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
                      <p className='text-xs'>Wo hast du deine Ausbildung/Studiengang absolviert?</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <p className='w-full mt-4'>Detailliertere Informationen:</p>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Hobbys:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={hobbys}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setHobbys(e.target.value)}
                  placeholder="Sport, Fliegen, Schrauben, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Freizeitgestaltung:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={activities}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setActivities(e.target.value)}
                  placeholder="Pool, Kochen, Sport, Alkohol trinken, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Talente:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={talents}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setTalents(e.target.value)}
                  placeholder="Spricht Sprache X, Handwerklich begabt, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Angewohnheiten:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={habits}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setHabits(e.target.value)}
                  placeholder="Geht gern Risiken ein, Ist sehr organisiert, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Tics & Marotten:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={tics}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setTics(e.target.value)}
                  placeholder="Spricht Sprache X, Handwerklich begabt, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Ängste:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={fears}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setFears(e.target.value)}
                  placeholder="Hat Angst im Dunklem, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Hervorstechender Charakterzug:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={character}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setCharacter(e.target.value)}
                  placeholder="Ist sehr loyal, manchmal zu ehrlich, manchmal etwas impulsiv, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Rästelhafte Züge:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={secrets}
                  onChange={(e) => setSecrets(e.target.value)}
                  placeholder="Spricht nicht über Ereignis X, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <p className='w-full mt-4'>Geschmäcker:</p>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Musik:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={music}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setMusic(e.target.value)}
                  placeholder="Rock Musik, EDM, Metal, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Filme:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={movies}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setMovies(e.target.value)}
                  placeholder="Interstellar, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Bücher:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={books}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setBooks(e.target.value)}
                  placeholder="Brochuren von Hersteller X, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Kleidung:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={clothing}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setClothing(e.target.value)}
                  placeholder="Interstellar, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Speisen:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={food}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setFood(e.target.value)}
                  placeholder="Big Bennys Nudeln, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Getränke:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={drink}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setDrink(e.target.value)}
                  placeholder="Vestal Wasser, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Alkohol:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={alcohol}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setAlcohol(e.target.value)}
                  placeholder="Schmolz Bier, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Farben:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={color}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Grün, Rot, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Liebt...:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={loves}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setLoves(e.target.value)}
                  placeholder="Hochwertige Schiffe, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
            <div className='flex justify-between w-full mb-3 space-x-4 lg:w-1/2'>
              <label className='my-auto text-xl'>Hasst...:</label>
              <div className='w-8/12 lg:w-full lg:max-w-[380px]'>
                <input
                  value={hates}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setHates(e.target.value)}
                  placeholder="Drake, ..."
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <p className='w-full mt-4'>Medizinisch Relevantes:</p>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4'>
              <div className='w-full'>
                <textarea
                  value={medicalInformations}
                  autoComplete={false} autoCorrect={false}
                  onChange={(e) => setMedicalInformations(e.target.value)}
                  placeholder={"- Rechte Hand große Narbe verursacht durch eine Piratenklinge \n- Linke Ohrmuschel nicht vorhanden durch einen schlimmen Rennsport-Unfall"}
                  className="form-control block resize-none w-full h-52 px-3 py-1.5 text-base font-normal text-gray-300 bg-[#111] bg-clip-padding border border-solid border-bg-secondary rounded transition ease-in-out m-0 focus-visible:outline-none" />
              </div>
            </div>
          </div>
          <p className='w-full mt-4'>Biografie:</p>
          <div className='flex flex-wrap justify-between px-8 lg:space-x-12 lg:flex-nowrap'>
            <div className='flex justify-between w-full mb-3 space-x-4'>
              <div className='w-full'>
                <Editor
                  tinymceScriptSrc={'/tinymce/tinymce.min.js'}
                  value={biography}
                  onEditorChange={handleBiographyChange}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                      'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                      'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'ariscorpElements'
                    ],
                    toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                      'alignleft aligncenter alignright alignjustify | ' +
                      'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help | ariscorpElements',
                    content_style: 'body { font-family:nasalization, sans-serif; font-size:14px; color: #f0f6fc; }',
                    skin: "ArisCorp",
                    block_formats: 'Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6',
                    verify_html: false,
                    extended_valid_elements: "basicpanel",
                    custom_elements: "basicpanel",
                    valid_children: "+basicpanel[div]",
                    setup: (editor) => {
                      /* Menu items are recreated when the menu is closed and opened, so we need
                         a variable to store the toggle menu item state. */
                      let toggleState = false;

                      /* example, adding a toolbar menu button */
                      editor.ui.registry.addMenuButton('ariscorpElements', {
                        text: 'ArisCorp-Elemente',
                        fetch: (callback) => {
                          const items = [
                            {
                              type: 'menuitem',
                              text: 'Menu item 1',
                              onAction: () => editor.insertContent('<basicpanel test="test"><div>test</div></basicpanel>')
                              // onClick: function() {
                              //   editor.insertContent('<div component="test">EM Start</div>');
                              // }
                            },
                            {
                              type: 'nestedmenuitem',
                              text: 'Menu item 2',
                              icon: 'user',
                              getSubmenuItems: () => [
                                {
                                  type: 'menuitem',
                                  text: 'Sub menu item 1',
                                  icon: 'unlock',
                                  onAction: () => editor.insertContent('&nbsp;<em>You clicked Sub menu item 1!</em>')
                                },
                                {
                                  type: 'menuitem',
                                  text: 'Sub menu item 2',
                                  icon: 'lock',
                                  onAction: () => editor.insertContent('&nbsp;<em>You clicked Sub menu item 2!</em>')
                                }
                              ]
                            },
                            {
                              type: 'togglemenuitem',
                              text: 'Toggle menu item',
                              onAction: () => {
                                toggleState = !toggleState;
                                editor.insertContent('&nbsp;<em>You toggled a menuitem ' + (toggleState ? 'on' : 'off') + '</em>');
                              },
                              onSetup: (api) => {
                                api.setActive(toggleState);
                                return () => { };
                              }
                            }
                          ];
                          callback(items);
                        }
                      });

                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='sticky w-full bottom-36 lg:bottom-20'>
          <div className='absolute flex space-x-4 right-4'>
            <XCircleIcon onClick={() => changesMade && openCancelModal()} className={'w-12 h-12 transition duration-200 hover:duration-300 text-red-500/50 hover:text-red-500 ' + (changesMade ? "grayscale-0 cursor-pointer" : "grayscale")} />
            <CheckCircleIcon onClick={() => changesMade && saveMemberEdit()} className={'w-12 h-12 transition duration-200 hover:duration-300 text-green-500/50 hover:text-green-500 ' + (changesMade ? "grayscale-0 cursor-pointer" : "grayscale")} />
          </div>
        </div>
      </div>
    </ProtectedLayout>
  )
}
