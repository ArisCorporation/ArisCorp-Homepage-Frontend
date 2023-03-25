import { Listbox, Transition } from '@headlessui/react'
import Head from 'next/head'
import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiSelector } from 'react-icons/hi'
import Layout from './layout'
const axios = require('axios')

const permissionLevels = [
  {
    id: 0,
    name: 'Mitglied',
    value: 'a74700bc-7e32-4597-a1e1-34c6d7674dad',
    unavailable: false,
  },
  {
    id: 1,
    name: 'Content-Writer',
    value: '4421bd05-d49f-4abe-a92e-9c0fb606e6f0',
    unavailable: false,
  },
]

export default function NewMemberPage() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [title, setTitle] = useState('')
  const [memberCreated, setMemberCreated] = useState(false)
  const [firstStepSelection, setFirstStepSelection] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [permissionLevel, setPermissionLevel] = useState({
    id: -1,
    name: 'Please set a Value',
    value: '',
    unavailable: false,
  })
  const [submitError, setSubmitError] = useState({
    id: null,
    message: null,
  })
  const siteTitle =
    'Member Creating Tool - Astro Research and Industrial Service Corporation'

  async function handleSubmit() {
    if (!firstname) {
      setSubmitError({ id: 1, message: 'Vorname muss vorhanden sein!' })
      return
    }
    if (!lastname) {
      setSubmitError({ id: 2, message: 'Nachname muss vorhanden sein!' })
      return
    }
    if (permissionLevels.indexOf(permissionLevel) <= -1) {
      setSubmitError({ id: 3, message: 'Zugriffslevel muss ausgewählt sein!' })
      return
    }

    const payload = {
      firstname,
      lastname,
      title,
      role: permissionLevel.value,
    }
    
    const { data } = await axios.post('/api/auth/newMember', payload)

    if (data?.status == 'ERROR') {
      if (data.code == 1) {
        setSubmitError({
          id: 4,
          message: 'The Email must be valid!',
        })
        return
      }
      if (data.code == 2) {
        setSubmitError({
          id: 5,
          message: 'Email already exists!',
        })
        return
      }
    }
    if (data.userData) {
      setEmail(data.userData.email)
      setPassword(data.userData.password)

      setFirstStepSelection(true)
      setTimeout(() => setMemberCreated(true), 300)
    }
  }

  return (
    <div className="px-24 pt-32">
      <Head>
        <title>{siteTitle}</title>

        <meta property="twitter:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="title" content={siteTitle} />
      </Head>
      <h1>Neuer Member:</h1>
      <div className="min-h-screen mt-12 rounded-lg drop-shadow-xl bg-bg-secondary/70">
        <div
          className={
            'transition-all duration-300 pt-4' +
            (firstStepSelection == true ? ' opacity-0' : '') +
            (memberCreated == true ? ' hidden' : '')
          }
        >
          <div className="flex w-full px-6 space-x-4">
            <div className={'w-1/3 mb-3 transition-opacity duration-300'}>
              <p className='after:content-["*"] after:ml-0.5'>Vorname</p>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Thomas"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-bg-primary bg-clip-padding border border-solid border-bg-primary rounded transition ease-in-out m-0 focus-visible:outline-none "
              />
              <p
                className={
                  'tracking-wide text-red-500 text-xs ml-1' +
                  (submitError.id != 1 ? ' hidden' : '')
                }
              >
                {submitError.message}
              </p>
            </div>
            <div className={'w-1/3 mb-3 transition-opacity duration-300'}>
              <p className='after:content-["*"] after:ml-0.5'>Nachname</p>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Blakeney"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-bg-primary bg-clip-padding border border-solid border-bg-primary rounded transition ease-in-out m-0 focus-visible:outline-none "
              />
              <p
                className={
                  'tracking-wide text-red-500 text-xs ml-1' +
                  (submitError.id != 2 ? ' hidden' : '')
                }
              >
                {submitError.message}
              </p>
            </div>
            <div className={'w-1/5 mb-3 transition-opacity duration-300'}>
              <p>Titel</p>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Dr. Med."
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-bg-primary bg-clip-padding border border-solid border-bg-primary rounded transition ease-in-out m-0 focus-visible:outline-none "
              />
            </div>
          </div>
          <div className="w-full px-6">
            <div className="flex w-full space-x-4">
              <div className="w-1/3">
                <p className='after:content-["*"] after:ml-0.5'>
                  Account Zugriffslevel
                </p>
                <Listbox value={permissionLevel} onChange={setPermissionLevel}>
                  <div className="relative z-10 mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-pointer border-bg-secondary bg-bg-primary focus-visible:outline-none sm:text-sm">
                      <span
                        className={
                          'block truncate' +
                          (permissionLevel.name == 'Please set a Value'
                            ? ' invisible'
                            : '')
                        }
                      >
                        {permissionLevel.name}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <HiSelector
                          className="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute w-full py-1 pl-0 mt-1 overflow-auto text-base rounded-md shadow-lg bg-bg-primary max-h-60 ring-1 ring-white ring-opacity-5 focus:outline-none sm:text-sm">
                        {permissionLevels.map((permissionLevel, index) => (
                          <Listbox.Option
                            key={index}
                            className={({ active }) =>
                              `cursor-pointer select-none relative py-2 pl-4 pr-4 ${
                                active
                                  ? 'text-secondary bg-bg-secondary'
                                  : 'opacity-50'
                              }`
                            }
                            value={permissionLevel}
                          >
                            {({ selectedPermissionLevel }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selectedPermissionLevel
                                      ? 'font-medium'
                                      : 'font-normal'
                                  }`}
                                >
                                  {permissionLevel.name}
                                </span>
                                {selectedPermissionLevel ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center text-secondary">
                                    <AiOutlineCheck
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>

                <p
                  className={
                    'tracking-wide text-red-500 text-xs ml-1' +
                    (submitError.id != 3 ? ' hidden' : '')
                  }
                >
                  {submitError.message}
                </p>
              </div>
            </div>
            <div className="w-full mt-12">
              <button
                onClick={() => handleSubmit()}
                className="w-full px-8 py-3 text-center transition-all duration-150 ease-out rounded-lg hover:duration-200 bg-bg-primary/50 hover:bg-bg-primary hover:shadow-lg"
              >
                <div>
                  <p className="inline-block">Member erstellen?</p>
                  <AiOutlineCheck className="inline-block my-auto mb-px ml-2 scale-125" />
                </div>
              </button>
            </div>
          </div>
        </div>
        {memberCreated == true && (
          <div className="pt-12 text-center">
            <h2 className="text-primary">
              Das neue Mitglied wurde nun erstellt!
            </h2>
            <h3>Wir wünschen dir noch viel Spaß im Verse!</h3>
            <h2 className="pt-6 text-primary">Hier sind die Anmeldedaten:</h2>
            <div className="grid w-1/5 grid-cols-2 pt-4 mx-auto text-left gap-x-4 gap-y-2">
              <p className="text-secondary">Email:</p>
              <p>
                <code>{email}</code>
              </p>
              <p className="text-secondary">Passwort:</p>
              <p>
                <code>{password}</code>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

NewMemberPage.getLayout = function getLayout(page) {
  return <Layout> {page}</Layout>
}
