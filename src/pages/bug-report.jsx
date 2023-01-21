import { Listbox, Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import { HiSelector } from 'react-icons/hi'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Layout from './layout'
const axios = require('axios')

const tags = [
  'Known-Issues',
  'Important-Issues',
  'Critical-Issues',
  'Bug-Report',
]

const tagss = [
  {
    id: 'ebe31621-184c-ed11-ade6-cc60c8b6347d',
    name: 'Known-Issue',
  },
  {
    id: 'b6da5cb3-184c-ed11-ade6-cc60c8b6347d',
    name: 'Important-Issue',
  },
  {
    id: 'f0e31621-184c-ed11-ade6-cc60c8b6347d',
    name: 'Critical-Issue',
  },
  {
    id: 'ef948003-6d4e-ed11-ade6-cc60c8b6347d',
    name: 'Bug-Report',
  },
  {
    id: 'f1e31621-184c-ed11-ade6-cc60c8b6347d',
    name: 'Front-End',
  },
  {
    id: 'efe31621-184c-ed11-ade6-cc60c8b6347d',
    name: 'Back-End',
  },
  {
    id: 'ede31621-184c-ed11-ade6-cc60c8b6347d',
    name: 'Homepage',
  },
  {
    id: 'f2e31621-184c-ed11-ade6-cc60c8b6347d',
    name: 'VerseExkurs',
  },
  {
    id: 'ece31621-184c-ed11-ade6-cc60c8b6347d',
    name: 'ShipExkurs',
  },
]

const projects = [
  {
    id: 0,
    name: 'Homepage',
    value: 'homepage',
    unavailable: false,
  },
  {
    id: 1,
    name: 'VerseExkurs',
    value: 'verseexkurs',
    unavailable: false,
  },
  {
    id: 2,
    name: 'ShipExkurs',
    value: 'shipexkurs',
    unavailable: false,
  },
]

const focuses = [
  {
    id: 0,
    name: 'Inhalt',
    value: 'content',
    unavailable: false,
  },
  {
    id: 1,
    name: 'Technik',
    value: 'tech',
    unavailable: false,
  },
]

export async function getServerSideProps() {
  const res = await axios.get(
    `https://api.awork.io/api/v1/projects/005bb376-e97c-eb11-a607-00155d314496/projecttasks`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWQiOiI5MDA0ZDYzOS1lOTdjLWViMTEtYTYwNy0wMDE1NWQzMTQ0OTYiLCJpaWQiOiI0NzVlZDZjNC0xNDRjLWVkMTEtYWRlNi1jYzYwYzhiNjM0N2QiLCJ1aWQiOiI0NzVlZDZjNC0xNDRjLWVkMTEtYWRlNi1jYzYwYzhiNjM0N2QiLCJuYW1lIjoiYnVnLXJlcG9ydCIsImF6cCI6ImJ1Zy1yZXBvcnQiLCJzY29wZSI6Im9mZmxpbmVfYWNjZXNzIiwicnRpZCI6IjQ3NWVkNmM0LTE0NGMtZWQxMS1hZGU2LWNjNjBjOGI2MzQ3ZCIsIm5iZiI6MTY2NTc4ODc2MiwiZXhwIjo0Nzg5OTI2MzYyLCJpc3MiOiJodHRwczovL2F3b3JrLmlvLyIsImF1ZCI6ImF3LWFjY291bnRzIn0.7OyiskCz7ZCE9GyRN7kDBe3cepMoIQVYZSEArdVrnRQ',
      },
    }
  )

  return {
    props: {
      data: res.data,
    },
  }
}

export default function BugReportPage({ data }) {
  const [title, setTitle] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedTask, setSelectedTask] = useState()
  const [currentStep, setCurrentStep] = useState(1)
  const [firstStepSelection, setFirstStepSelection] = useState()
  const [secondStepSelection, setSecondStepSelection] = useState()
  const [second2StepSelection, setSecond2StepSelection] = useState()
  const [browser, setBrowser] = useState()
  const [OS, setOS] = useState()
  const [bugIsDone, setBugIsDone] = useState(false)
  const [bugDescription, setBugDescription] = useState()
  const [project, setProject] = useState({
    id: -1,
    name: 'Please set a Value',
    value: '',
    unavailable: false,
  })
  const [focus, setFocus] = useState({
    id: -1,
    name: 'Please set a Value',
    value: '',
    unavailable: false,
  })
  const [submitError, setSubmitError] = useState({
    id: null,
    message: null,
  })

  const newArray = []

  data.forEach((object, index) => {
    newArray.push({
      id: index,
      oId: object.id,
      name: object.name,
      tags: [],
      description: object.description,
      searchHelp: '',
      taskStatus: object.taskStatus.name,
      selected: false,
    })

    object.tags.forEach((obj, ind) => {
      newArray[index].tags.push(obj.name)
    })

    const shelpTags = newArray[index].tags.join(' ')
    newArray[index].searchHelp =
      newArray[index].name +
      ' ' +
      shelpTags +
      ' ' +
      newArray[index].description +
      ' '
  })

  const knownBugs = newArray.filter((element) =>
    tags.some((x) => element.tags.includes(x))
  )

  useEffect(() => {
    if (title == '' || title == null || title == 'null' || title == ' ') {
      const results = []
      setSearchResults(results)
    } else {
      const results = knownBugs.filter((o) => {
        return o.searchHelp.toLowerCase().includes(title.toLowerCase())
      })
      setSearchResults(results)
    }
  }, [title])

  useEffect(() => {
    function getOperatingSystem(window) {
      let operatingSystem = 'Not known'
      if (window.navigator.appVersion.indexOf('Win') !== -1) {
        operatingSystem = 'Windows OS'
      }
      if (window.navigator.appVersion.indexOf('Mac') !== -1) {
        operatingSystem = 'MacOS'
      }
      if (window.navigator.appVersion.indexOf('X11') !== -1) {
        operatingSystem = 'UNIX OS'
      }
      if (window.navigator.appVersion.indexOf('Linux') !== -1) {
        operatingSystem = 'Linux OS'
      }

      return operatingSystem
    }

    function getBrowser(window) {
      let currentBrowser = 'Not known'
      if (window.navigator.userAgent.indexOf('Chrome') !== -1) {
        currentBrowser = 'Google Chrome'
      } else if (window.navigator.userAgent.indexOf('Firefox') !== -1) {
        currentBrowser = 'Mozilla Firefox'
      } else if (window.navigator.userAgent.indexOf('MSIE') !== -1) {
        currentBrowser = 'Internet Exployer'
      } else if (window.navigator.userAgent.indexOf('Edge') !== -1) {
        currentBrowser = 'Edge'
      } else if (window.navigator.userAgent.indexOf('Safari') !== -1) {
        currentBrowser = 'Safari'
      } else if (window.navigator.userAgent.indexOf('Opera') !== -1) {
        currentBrowser = 'Opera'
      } else if (window.navigator.userAgent.indexOf('Opera') !== -1) {
        currentBrowser = 'YaBrowser'
      }

      return currentBrowser
    }

    setOS(getOperatingSystem(window))
    setBrowser(getBrowser(window))
  }, [])

  function handleSubmit() {
    if (!title) {
      setSubmitError({ id: 1, message: 'Titel muss vorhanden sein!' })
      return
    }
    if (projects.indexOf(project) <= -1) {
      setSubmitError({ id: 2, message: 'Projekt muss ausgewählt sein!' })
      return
    }
    if (!bugDescription) {
      setSubmitError({
        id: 3,
        message: 'Bug Beschreibung muss vorhanden sein!',
      })
      return
    }
    if (focuses.indexOf(focus) <= -1) {
      setSubmitError({ id: 4, message: 'Art des Bugs muss ausgewählt sein!' })
      return
    }
    // const description = bugDescription.replace(/\n/g, ",")
    // bugDescription.value.re
    const newBug = {
      name: title,
      description:
        `<p>` +
        bugDescription.replace(/\n/g, '<p><br /></p>') +
        ` <p><br></p><p><br></p> <p>OS: ${OS}</p> <p>Browser: ${browser}</p></p>`,
      typeOfWorkId: '4b21fdf6-bf0e-4db1-6756-08d8df08faff',
      taskStatusId: 'efa885e5-174c-ed11-ade6-cc60c8b6347d',
      order: 0,
      entityId: '005bb376-e97c-eb11-a607-00155d314496',
      baseType: 'projecttask',
      lists: [
        {
          id: '51310d1d-3e0f-ec11-b563-dc984023d47e',
          order: 0,
        },
      ],
    }

    const tags = [
      {
        name: 'Bug-Report',
        color: 'yellow',
      },
    ]
    const assignees = []

    if (project.value == 'homepage') {
      tags.push({
        name: 'Homepage',
        color: 'blue',
      })
    } else if (project.value == 'verseexkurs') {
      tags.push({
        name: 'VerseExkurs',
        color: 'blue',
      })
    } else if (project.value == 'shipexkurs') {
      tags.push({
        name: 'ShipExkurs',
        color: 'azure',
      })
    }

    if (focus.value == 'content') {
      tags.push({
        name: 'Content',
        color: 'green',
      })
      assignees.push('3cdd29dc-4083-eb11-a607-00155d314496')
    } else if (focus.value == 'tech') {
      tags.push({
        name: 'Tech',
        color: 'purple',
      })
      assignees.push('c804d639-e97c-eb11-a607-00155d314496')
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWQiOiI5MDA0ZDYzOS1lOTdjLWViMTEtYTYwNy0wMDE1NWQzMTQ0OTYiLCJpaWQiOiI0NzVlZDZjNC0xNDRjLWVkMTEtYWRlNi1jYzYwYzhiNjM0N2QiLCJ1aWQiOiI0NzVlZDZjNC0xNDRjLWVkMTEtYWRlNi1jYzYwYzhiNjM0N2QiLCJuYW1lIjoiYnVnLXJlcG9ydCIsImF6cCI6ImJ1Zy1yZXBvcnQiLCJzY29wZSI6Im9mZmxpbmVfYWNjZXNzIiwicnRpZCI6IjQ3NWVkNmM0LTE0NGMtZWQxMS1hZGU2LWNjNjBjOGI2MzQ3ZCIsIm5iZiI6MTY2NTc4ODc2MiwiZXhwIjo0Nzg5OTI2MzYyLCJpc3MiOiJodHRwczovL2F3b3JrLmlvLyIsImF1ZCI6ImF3LWFjY291bnRzIn0.7OyiskCz7ZCE9GyRN7kDBe3cepMoIQVYZSEArdVrnRQ',
    }

    axios
      .post(`https://api.awork.io/api/v1/tasks`, newBug, {
        headers: headers,
      })
      .then((resp) => {
        let tid = resp.data.id
        axios
          .post(`https://api.awork.io/api/v1/tasks/${tid}/addtags`, tags, {
            headers: headers,
          })
          .catch(function (error) {
          })
        axios
          .post(
            `https://api.awork.io/api/v1/tasks/${tid}/setassignees`,
            assignees,
            {
              headers: headers,
            }
          )
          .catch(function (error) {
          })
      })
      .catch(function (error) {
      })

    setBugIsDone(true)
  }

  function handleChange() {
    const reassign = [
      {
        taskId: selectedTask,
        statusId: 'efa885e5-174c-ed11-ade6-cc60c8b6347d',
        order: 0,
      },
    ]

    const newList = [
      {
        taskId: selectedTask,
        taskLists: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            order: 0,
          },
        ],
      },
    ]

    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3aWQiOiI5MDA0ZDYzOS1lOTdjLWViMTEtYTYwNy0wMDE1NWQzMTQ0OTYiLCJpaWQiOiI0NzVlZDZjNC0xNDRjLWVkMTEtYWRlNi1jYzYwYzhiNjM0N2QiLCJ1aWQiOiI0NzVlZDZjNC0xNDRjLWVkMTEtYWRlNi1jYzYwYzhiNjM0N2QiLCJuYW1lIjoiYnVnLXJlcG9ydCIsImF6cCI6ImJ1Zy1yZXBvcnQiLCJzY29wZSI6Im9mZmxpbmVfYWNjZXNzIiwicnRpZCI6IjQ3NWVkNmM0LTE0NGMtZWQxMS1hZGU2LWNjNjBjOGI2MzQ3ZCIsIm5iZiI6MTY2NTc4ODc2MiwiZXhwIjo0Nzg5OTI2MzYyLCJpc3MiOiJodHRwczovL2F3b3JrLmlvLyIsImF1ZCI6ImF3LWFjY291bnRzIn0.7OyiskCz7ZCE9GyRN7kDBe3cepMoIQVYZSEArdVrnRQ',
    }

    axios
      .post(`https://api.awork.io/api/v1/tasks/changestatuses`, reassign, {
        headers: headers,
      })
      .catch(function (error) {
      })
  }

  return (
    <div className="px-24 pt-32">
      <h1>Bug Melden:</h1>
      <div className="min-h-screen mt-12 rounded-lg drop-shadow-xl bg-bg-secondary/70">
        <div className="pt-4">
          <div className="flex mx-6">
            <div
              className={
                'w-full mb-3 transition-opacity duration-300' +
                (currentStep == 'done' || secondStepSelection != null || firstStepSelection == 'yes' ? ' opacity-0' : ' opacity-100')
              }
            >
              <p>Titel</p>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titel"
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
          </div>
          <div
            className={
              'transition-all duration-300' +
              (firstStepSelection != null ? ' opacity-0' : '') +
              (currentStep != 1 ? ' hidden' : '')
            }
          >
            <div className="px-6 pb-4">
              <ul className="p-0 list-none">
                {searchResults.map((object, index) => (
                  <li
                    key={object.name}
                    className={
                      'mb-4 hover:cursor-pointer hover:shadow-2xl transition-all duration-200 ease-in px-4 rounded-lg shadow-lg min-h-[120px] flex relative' +
                      (selectedTask == object.oId
                        ? ' bg-bg-primary opacity-100'
                        : ' bg-bg-primary/80 hover:bg-bg-primary/90 opacity-80')
                    }
                    onClick={() =>
                      selectedTask == object.oId
                        ? setSelectedTask(null)
                        : setSelectedTask(object.oId)
                    }
                  >
                    <h2 className="max-w-3xl my-auto mt-6 text-xl uppercase text-primary">
                      {object.name}
                    </h2>
                    <div className="my-auto ml-auto">
                      State:{' '}
                      {object.tags.includes('Bug-Report')
                        ? 'Reported'
                        : object.taskStatus
                            .toLowerCase()
                            .charAt(0)
                            .toUpperCase() +
                          object.taskStatus.toLowerCase().slice(1)}
                    </div>
                    <div className="absolute text-sm bottom-4 text-secondary/75">
                      {object.tags.join(', ')}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={
                'pt-4 pb-6 duration-300 ease-in transition-all ' +
                (title == '' || title == null || title == 'null' || title == ' '
                  ? 'opacity-0 invisible'
                  : '')
              }
            >
              <h2 className="text-center">Ist dein Bug schon vorhanden?</h2>
              <div className="flex justify-between px-56 mt-6">
                <button
                  onClick={() => {
                    setFirstStepSelection(selectedTask != null ? 'yes' : 'no'),
                      setTimeout(() => setCurrentStep(2), 300)
                  }}
                  className="w-full px-8 py-3 text-center transition-all duration-150 ease-out rounded-lg hover:cursor-pointer hover:duration-200 bg-bg-primary/50 hover:bg-bg-primary hover:shadow-lg"
                >
                  {selectedTask != null ? (
                    <div>
                      <p className="inline-block">Ja</p>
                      <AiOutlineCheck className="inline-block my-auto mb-px ml-2 scale-125" />
                    </div>
                  ) : (
                    <div>
                      <p className="inline-block">Nein</p>
                      <AiOutlinePlus className="inline-block my-auto mb-px ml-2 scale-125 rotate-45" />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              'transition-all duration-300' +
              (firstStepSelection == null || firstStepSelection != 'yes'
                ? ' hidden'
                : currentStep != 2 && secondStepSelection != null
                ? ' hidden'
                : currentStep != 2 || secondStepSelection != null
                ? ' opacity-0'
                : '')
            }
          >
            <div
              className={
                'text-center' + (firstStepSelection == 'yes' ? '' : ' hidden')
              }
            >
              {knownBugs.find((e) => e.oId == selectedTask)?.taskStatus ==
              'COMITTED' ? (
                <>
                  <h2>Dieser Task ist bereits Comitted.</h2>
                  <h3>Teste bitte ob er immer noch vorhanden ist.</h3>

                  <p className="mt-6">Ist der Bug noch vorhanden?</p>
                  <div className="flex justify-between w-1/2 mx-auto mt-6">
                    <button
                      onClick={() => {
                        setSecondStepSelection('yes'),
                          handleChange(selectedTask)
                        setTimeout(() => setCurrentStep(2.5), 300)
                      }}
                      className="px-12 py-3 text-center transition-all duration-150 ease-out rounded-lg hover:cursor-pointer hover:duration-200 bg-bg-primary/50 hover:bg-bg-primary hover:shadow-lg"
                    >
                      <div>
                        <p className="inline-block">Ja</p>
                        <AiOutlineCheck className="inline-block my-auto mb-px ml-2 scale-125" />
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        setSecondStepSelection('no'),
                          setTimeout(() => setCurrentStep(2.5), 300)
                      }}
                      className="flex px-12 py-3 text-center transition-all duration-150 ease-out rounded-lg hover:cursor-pointer hover:duration-200 bg-bg-primary/50 hover:bg-bg-primary hover:shadow-lg"
                    >
                      <div
                        onClick={() => {
                          setSecondStepSelection('no'),
                            setTimeout(() => setCurrentStep(2.5), 300)
                        }}
                      >
                        <p className="inline-block">Nein</p>
                        <AiOutlinePlus className="inline-block my-auto mb-px ml-2 scale-125 rotate-45" />
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-primary">
                    Danke das du diesen Bug bestätigt hast!
                  </h2>
                  <p>
                    Wir werden uns schnellstmöglich darum kümmern ihn zu lösen!
                  </p>
                </>
              )}
            </div>
          </div>
          <div
            className={
              'transition-all duration-300' +
              (secondStepSelection == null
                ? ' hidden'
                : currentStep != 2.5 && second2StepSelection != null
                ? ' hidden'
                : currentStep != 2.5 || second2StepSelection != null
                ? ' opacity-0'
                : '')
            }
          >
            {secondStepSelection == 'no' ? (
              <>
                <div className="text-center">
                  <h2 className="text-primary">
                    Danke das du unser Bug Reporting Tool benutzt hast!
                  </h2>
                  <h3>Wir wünschen dir noch viel Spaß im Verse!</h3>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <h2 className="text-primary">
                    Danke das du den Bug bestätigt hast!
                  </h2>
                  <h3>
                    Wir werden schnellstmöglich versuchen diesen Bug zu lösen!
                  </h3>
                </div>
              </>
            )}
          </div>
          <div
            className={
              'transition-all duration-300' +
              (firstStepSelection == null || firstStepSelection != 'no'
                ? ' hidden'
                : currentStep != 2 && bugIsDone != false
                ? ' hidden'
                : currentStep != 2 || bugIsDone != false
                ? ' opacity-0'
                : '')
            }
          >
            <div className="w-full ml-6">
              <div className="flex w-full space-x-4">
                <div className="w-1/3">
                  <p className='after:content-["*"] after:ml-0.5'>
                    Betriebssystem
                  </p>
                  <div className="w-full mb-3">
                    <input
                      value={OS}
                      placeholder="Titel"
                      disabled
                      className="form-control block w-full px-3 py-1.5 disabled:opacity-70 text-base font-normal text-gray-300 bg-bg-primary bg-clip-padding border border-solid border-bg-primary rounded transition ease-in-out m-0 focus-visible:outline-none "
                    />
                  </div>
                </div>
                <div className="w-1/3">
                  <p className='after:content-["*"] after:ml-0.5'>Browser</p>
                  <div className="w-full mb-3">
                    <input
                      value={browser}
                      placeholder="Titel"
                      disabled
                      className="form-control block w-full px-3 py-1.5 disabled:opacity-70 text-base font-normal text-gray-300 bg-bg-primary bg-clip-padding border border-solid border-bg-primary rounded transition ease-in-out m-0 focus-visible:outline-none "
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full space-x-4">
                <div className="w-1/3">
                  <p className='after:content-["*"] after:ml-0.5'>Project</p>
                  <Listbox value={project} onChange={setProject}>
                    <div className="relative z-10 mt-1">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-pointer border-bg-secondary bg-bg-primary focus-visible:outline-none sm:text-sm">
                        <span
                          className={
                            'block truncate' +
                            (project.name == 'Please set a Value'
                              ? ' invisible'
                              : '')
                          }
                        >
                          {project.name}
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
                          {projects.map((project, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                `cursor-pointer select-none relative py-2 pl-4 pr-4 ${
                                  active
                                    ? 'text-secondary bg-bg-secondary'
                                    : 'opacity-50'
                                }`
                              }
                              value={project}
                            >
                              {({ selectedProject }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selectedProject
                                        ? 'font-medium'
                                        : 'font-normal'
                                    }`}
                                  >
                                    {project.name}
                                  </span>
                                  {selectedProject ? (
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
                      (submitError.id != 4 ? ' hidden' : '')
                    }
                  >
                    {submitError.message}
                  </p>
                </div>
                <div className="w-1/3">
                  <p className='after:content-["*"] after:ml-0.5'>
                    Art des Bugs
                  </p>
                  <Listbox value={focus} onChange={setFocus}>
                    <div className="relative z-10 mt-1">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border-2 rounded-lg shadow-md cursor-pointer border-bg-secondary bg-bg-primary focus-visible:outline-none sm:text-sm">
                        <span
                          className={
                            'block truncate' +
                            (focus.name == 'Please set a Value'
                              ? ' invisible'
                              : '')
                          }
                        >
                          {focus.name}
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
                          {focuses.map((focus, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                `cursor-pointer select-none relative py-2 pl-4 pr-4 ${
                                  active
                                    ? 'text-secondary bg-bg-secondary'
                                    : 'opacity-50'
                                }`
                              }
                              value={focus}
                            >
                              {({ selectedFocus }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selectedFocus
                                        ? 'font-medium'
                                        : 'font-normal'
                                    }`}
                                  >
                                    {focus.name}
                                  </span>
                                  {selectedFocus ? (
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
                      (submitError.id != 2 ? ' hidden' : '')
                    }
                  >
                    {submitError.message}
                  </p>
                </div>
              </div>
              <div className="w-full mt-4">
                <div className="w-full pr-12">
                  <p className='after:content-["*"] after:ml-0.5'>
                    Bug Beschreibung
                  </p>
                  <div className="w-full mb-3">
                    <textarea
                      value={bugDescription}
                      onChange={(e) => setBugDescription(e.target.value)}
                      placeholder="Bug Beschreibung"
                      cols="35"
                      rows="10"
                      className="form-control block w-full min-h-12  px-3 py-1.5 disabled:opacity-70 text-base font-normal text-gray-300 bg-bg-primary bg-clip-padding border border-solid border-bg-primary rounded transition ease-in-out m-0 focus-visible:outline-none "
                    />
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
              </div>
              <div className="w-full mt-12">
                <button
                  onClick={() => {
                    handleSubmit('yes'),
                      setTimeout(() => setCurrentStep('done'), 300)
                  }}
                  className="w-full px-8 py-3 text-center transition-all duration-150 ease-out rounded-lg hover:duration-200 bg-bg-primary/50 hover:bg-bg-primary hover:shadow-lg"
                >
                  <div>
                    <p className="inline-block">Melden</p>
                    <AiOutlineCheck className="inline-block my-auto mb-px ml-2 scale-125" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              'transition-all duration-300' +
              (firstStepSelection == null || firstStepSelection != 'no'
                ? ' hidden'
                : currentStep != 'done' && bugIsDone != true
                ? ' hidden'
                : currentStep != 'done' || bugIsDone != true
                ? ' opacity-0'
                : '')
            }
          >
            <div className="text-center">
              <h2 className="text-primary">
                Danke das du unser Bug Reporting Tool benutzt hast!
              </h2>
              <h3>Wir wünschen dir noch viel Spaß im Verse!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BugReportPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
