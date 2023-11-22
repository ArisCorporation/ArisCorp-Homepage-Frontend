import Layout from './layout'
import { GET_GAMEPLAYS, GET_MEMBERS, INTERNAL_GET_FLEET } from 'graphql/queries'
import client from 'apollo/clients'
import { useEffect, useState } from 'react'
import SelectionGridWrapper from 'components/SelectionGridWrapper'
import HangarShipCard from 'components/internal/HangarShipCard'
import { BasicPanelButton } from 'components/panels'
import Head from 'next/head'
import Dropdown from 'components/Dropdown'
import { useRouter } from 'next/router'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import MultipleCombobox from 'components/MultipleCombobox'
import Image from 'next/image'
import Link from 'next/link'

export async function getServerSideProps() {
  const { data: rawMemberData } = await client.query({ query: GET_MEMBERS })
  const { data: gameplayData } = await client.query({ query: GET_GAMEPLAYS })
  const siteTitle = 'Alle Mitglieder - ArisCorp Management System'

  return {
    props: {
      apiData: rawMemberData.member,
      departments: gameplayData.gameplays,
      siteTitle,
    },
  }
}

export default function InternalIndex({ apiData, departments, siteTitle }) {
  const { query, replace } = useRouter()
  const departmentquery = query.department
  const [selectedDepartment, setSelectedDepartment] = useState()
  const [data, setData] = useState(apiData)

  function changeDepartment(dep) {
    setSelectedDepartment(dep)
    replace({ query: { department: dep?.gameplay_name } }, undefined, {
      scroll: false,
    })
  }

  function filterData() {
    if (selectedDepartment != null) {
      let filteredData = apiData
      if (selectedDepartment != null) {
        filteredData = filteredData.filter((e) =>
          e.head_of_department
            ? e.head_department[0] &&
              e.head_department[0]?.gameplay_name ==
                selectedDepartment.gameplay_name
            : e.department &&
              e.department?.gameplay_name == selectedDepartment.gameplay_name
        )
      }
      setData(filteredData)
    } else {
      setData(apiData)
    }
  }

  useEffect(() => {
    // INITIAL STATES
    // DEPARTMENT
    setSelectedDepartment(
      departments.find((e) => e.gameplay_name == departmentquery)
    )
    filterData()
  }, [])

  useEffect(() => {
    // FILTER DATA
    setData([])
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
      <div className="w-full h-full">
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
        </div>
        <div
          id="member"
          className="flex items-center justify-center text-center"
        >
          <div className="grid w-full h-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-6 4xl:grid-cols-12">
            {data.map((member) => {
              const Potrait =
                member.member_potrait == null
                  ? '0b7eafde-0933-4d1a-a32f-b4f8dd5bb492'
                  : member.member_potrait?.id
              return (
                <div
                  key={member.id}
                  className="m-0 relative w-full h-fit px-[15px] mb-2"
                >
                  <figure className="relative inline-block overflow-hidden text-center group aspect-[270/320] w-full h-full max-w-[270px] max-h-[320px]">
                    <div className="relative w-full h-full border-b-2 border-solid rounded-sm border-secondary aspect-[270/320]">
                      <Image
                        src={'https://cms.ariscorp.de/assets/' + Potrait}
                        alt={member.slug + 'Potrait'}
                        fill
                        contain
                        placeholder="blur"
                        blurDataURL={
                          'https://cms.ariscorp.de/assets/' +
                          Potrait +
                          '?width=16&quality=1'
                        }
                      />
                    </div>
                    <figcaption className="absolute top-0 left-0 h-full bg-opacity-50 text-center pt-[40%] px-[20px] pb-[20px] z-5 opacity-0 bg-black group-hover:opacity-100 transition-all ease-linear min-w-full min-h-full block">
                      <hr className="w-[100px] h-[2px] mt-[5px] mb-auto m-auto" />
                      <p className="py-[10px] m-0 text-secondary">
                        <span className="text-white">Position: </span>
                        {member.position_level == 'candidate'
                          ? 'Anwärter'
                          : member.position_level == 'freelancer'
                          ? 'Freier Mitarbeiter'
                          : member.position_level == 'employee'
                          ? 'Mitarbeiter'
                          : member.position_level == 'administration'
                          ? 'Verwaltung'
                          : 'N/A'}
                      </p>
                      <hr className="w-[100px] h-[2px] mt-[5px] mb-auto m-auto" />
                      {member.roles[0] || member.head_of_department ? (
                        <>
                          <p className="p-[10px] m-0">
                            “
                            {member.roles.map((role, index) => (
                              <span key={index}>
                                {(index ? ', ' : '') +
                                  (role == 'marketing'
                                    ? 'Marketing & Presse'
                                    : role == 'recruitment'
                                    ? 'Rekrutierung'
                                    : role == 'content_writer'
                                    ? 'Inhaltsersteller'
                                    : role)}
                              </span>
                            ))}
                            {member.head_of_department && (
                              <span>, Abteilungsleiter</span>
                            )}
                            “
                          </p>
                          <hr className="w-[100px] h-[2px] m-auto" />
                        </>
                      ) : null}
                      <ul className="pl-0 mt-3 mb-0 space-x-4 list-none">
                        <Link
                          legacyBehavior
                          href={'/internal/biografie/' + member.slug}
                        >
                          <a
                            className="italic bg-transparent text-secondary hover:underline"
                            aria-label={
                              'Biografie von ' +
                              (member.title ? member.title + ' ' : '') +
                              member.firstname +
                              ' ' +
                              member?.lastname
                            }
                          >
                            BIOGRAFIE
                          </a>
                        </Link>
                        <Link
                          legacyBehavior
                          href={'/internal/hangar/' + member.slug}
                        >
                          <a
                            className="italic bg-transparent text-secondary hover:underline"
                            aria-label={
                              'Hangar von ' +
                              (member.title ? member.title + ' ' : '') +
                              member.firstname +
                              ' ' +
                              member?.lastname
                            }
                          >
                            HANGAR
                          </a>
                        </Link>
                      </ul>
                    </figcaption>
                  </figure>
                  <p className="text-2xl">
                    {member.title ? member.title + ' ' : ''}
                    {member.firstname} {member.lastname}
                  </p>
                  <p className="text-[#999]">
                    {member.position_level == 'candidate'
                      ? 'Anwärter'
                      : member.position_level == 'freelancer'
                      ? 'Freier Mitarbeiter'
                      : member.position_level == 'employee'
                      ? 'Mitarbeiter'
                      : member.position_level == 'administration'
                      ? 'Verwaltung'
                      : 'Mitglied'}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
