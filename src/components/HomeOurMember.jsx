import Image from 'next/image'
import Link from 'next/link'
import { SquareLoader } from 'react-spinners'
import { useQuery } from '@apollo/client'
import { GET_MEMBERS } from 'graphql/queries'

export default function OurMember() {
  const { data, loading, error } = useQuery(GET_MEMBERS)

  if (error) return <p>Error :(</p>

  if (loading) {
    return (
      <div id="member" className="flex justify-center pt-10">
        <SquareLoader color="#00ffe8" speedMultiplier="0.8" loading={loading} />
      </div>
    )
  }

  return (
    <div id="member" className="flex items-center justify-center text-center">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.member.map((member) => {
          const Potrait =
            member.member_potrait == null
              ? '0b7eafde-0933-4d1a-a32f-b4f8dd5bb492'
              : member.member_potrait?.id
          return (
            <div key={member.id} className="m-0 relative w-full px-[15px] mb-8">
              <figure className="relative inline-block overflow-hidden text-center group">
                <div className="relative border-b-2 border-solid rounded-sm border-secondary max-w-full w-[270px] h-[320px]">
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
                  <p className="p-[10px] m-0">
                    “
                    {member.roles.map((role, index) => (
                      <span key={index}>
                        {(index ? ', ' : '') +
                          (role === 'marketing'
                            ? 'Marketing & Presse'
                            : role === 'recruitment'
                            ? 'Rekrutierung'
                            : role === 'content_writer'
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
                  <ul className="pl-0 mt-3 mb-0 list-none">
                    <Link legacyBehavior href={'/biografie/' + member.slug}>
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
  )
}
