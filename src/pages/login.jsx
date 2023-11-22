import { useEffect, useState } from 'react'
import Head from 'next/head'
import { GET_VERSEEXKURS_ALIENRASSE } from 'graphql/queries'
import client from 'apollo/clients'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function getRandomBg(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export async function getServerSideProps() {
  let res = await axios.get(
    'https://cms.ariscorp.de/files?filter[folder]=3550a45d-ae4f-49bb-84bd-d4a438b9aaa6&fields=id,description,tags'
  )
  let backgrounds = res.data.data

  backgrounds.forEach((obj, index) => {
    backgrounds[index].left = obj.description
    if (obj.tags) {
      backgrounds[index].colorMode = obj.tags[0]
    }
    delete backgrounds[index].description
  })

  return {
    props: {
      backgrounds,
    },
  }
}

export default function InternalLogin({ backgrounds }) {
  const [currentBg, setCurrentBg] = useState(getRandomBg(backgrounds))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { callbackUrl } = router.query
  const { status: sessionStatus } = useSession()
  const authorized = sessionStatus === 'authenticated'

  authorized ? router.push('/internal') : null

  // const test = "width: '2643px' height: '1080px' left: '-101px' top: '0px'"

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBg(getRandomBg(backgrounds))
  //   }, 120000);
  //   return () => clearInterval(interval);
  // }, []);

  const onSubmit = async () => {
    const result = await signIn('credentials', {
      email: email.includes('@') ? email : email + '@ariscorp.de',
      password: password,
      redirect: true,
      callbackUrl: callbackUrl || '/internal',
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <>
      <div
        className="relative hidden h-screen min-w-full transition-all duration-1000 bg-center bg-cover" // 2xl:block to activate second login-screen
        style={{
          backgroundImage: `linear-gradient(80.79deg, #272A37 2.74%, #272A37 41.69%, rgba(39, 42, 55, 0.67) 70.53%, rgba(39, 42, 55, 0.63) 99.87%), linear-gradient(2.63deg, #272A37 -57.38%, rgba(39, 42, 55, 0.67) 0.96%, rgba(39, 42, 55, 0) 11.66%), linear-gradient(133.1deg, rgba(39, 42, 55, 0) 84.46%, #272A37 100.05%), url(//cms.ariscorp.de/assets/${currentBg.id})`,
        }}
      >
        <div className="absolute flex left-8 top-4">
          <img
            src={
              'https://cms.ariscorp.de/assets/650aba1c-3182-40a6-8185-a8f3d164ef2b'
            }
            width={128}
          />
          <div className="pt-4 my-auto text-xl">
            A<span className="text-primary"> . </span>M
            <span className="text-primary"> . </span>S
            <span className="text-primary"> .</span>
            <span className="mx-3">-</span>
            ArisCorp Management System
          </div>
        </div>

        <div className="relative top-1/3 pl-28">
          <div>
            <h1>Member Login</h1>
            <div className="pt-6 text-secondary">
              Noch kein Mitglied?
              <Link
                href={'/internal/recruiting'}
                className="pl-4 duration-200 opacity-75 text-primary hover:opacity-100 decoration-transparent hover:duration-300"
              >
                Bewerben
              </Link>
            </div>
          </div>

          <div onKeyDown={handleKeyDown} className="relative top-14">
            <div className="relative rounded-2xl bg-[#323644] w-[540px] h-[70px] px-8 pt-3">
              <svg
                viewBox="0 0 17 22"
                fill="none"
                className="absolute top-0 bottom-0 my-auto right-4 aspect-[17/22] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.249 4.75C12.249 5.74456 11.8539 6.69839 11.1507 7.40165C10.4474 8.10491 9.49356 8.5 8.499 8.5C7.50444 8.5 6.55061 8.10491 5.84735 7.40165C5.14409 6.69839 4.749 5.74456 4.749 4.75C4.749 3.75544 5.14409 2.80161 5.84735 2.09835C6.55061 1.39509 7.50444 1 8.499 1C9.49356 1 10.4474 1.39509 11.1507 2.09835C11.8539 2.80161 12.249 3.75544 12.249 4.75ZM1 18.868C1.03213 16.9004 1.83634 15.0242 3.23918 13.644C4.64202 12.2639 6.53109 11.4905 8.499 11.4905C10.4669 11.4905 12.356 12.2639 13.7588 13.644C15.1617 15.0242 15.9659 16.9004 15.998 18.868C13.6454 19.9468 11.0871 20.5035 8.499 20.5C5.823 20.5 3.283 19.916 1 18.868Z"
                  stroke="#A7A7A7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <label
                htmlFor="email-input"
                className="block text-sm text-[#A7A7A7]"
              >
                Benutzername:
              </label>
              <input
                type="text"
                id="email-input"
                className="w-full focus:outline-none pt-1 pr-4 inline-block bg-[#323644]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative rounded-2xl bg-[#323644] w-[540px] h-[70px] px-8 pt-3 mt-5">
              <svg
                viewBox="0 0 17 22"
                fill="none"
                className="absolute top-0 bottom-0 my-auto right-4 aspect-[17/22] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9.25V5.5C13 4.30653 12.5259 3.16193 11.682 2.31802C10.8381 1.47411 9.69347 1 8.5 1C7.30653 1 6.16193 1.47411 5.31802 2.31802C4.47411 3.16193 4 4.30653 4 5.5V9.25M3.25 20.5H13.75C14.3467 20.5 14.919 20.2629 15.341 19.841C15.7629 19.419 16 18.8467 16 18.25V11.5C16 10.9033 15.7629 10.331 15.341 9.90901C14.919 9.48705 14.3467 9.25 13.75 9.25H3.25C2.65326 9.25 2.08097 9.48705 1.65901 9.90901C1.23705 10.331 1 10.9033 1 11.5V18.25C1 18.8467 1.23705 19.419 1.65901 19.841C2.08097 20.2629 2.65326 20.5 3.25 20.5Z"
                  stroke="#A7A7A7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <label
                htmlFor="password-input"
                className="block text-sm text-[#A7A7A7]"
              >
                Passwort:
              </label>
              <input
                type="password"
                id="password-input"
                className="w-full focus:outline-none pt-1 pr-4 inline-block bg-[#323644]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="pt-14">
              {/* <button className="py-6 text-black rounded-full px-60 h-[68px] from-primary from-30% to-[#00A3FF] bg-[#00A3FF] transition-all duration-100 hover:duration-300 hover:bg-gradient-to-tr">
          Log In
        </button> */}
              <button
                onClick={onSubmit}
                className="py-6 text-black rounded-full px-60 h-[68px] bg-primary bg-opacity-25 hover:primary-bg hover:bg-opacity-100 transition-all duration-200 hover:duration-300 hover:bg-gradient-to-tr"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative h-screen min-w-full transition-all duration-1000 bg-center bg-cover"
        style={{
          backgroundImage: `url(//cms.ariscorp.de/assets/${currentBg.id})`,
        }}
      >
        <div className='absolute top-0 flex justify-center w-full xs:w-fit xs:left-6'>
          <div className="w-[250px] relative xs:w-[320px] aspect-[1112/477]">
            <Image
              fill
              src={
                process.env.NEXT_PUBLIC_FILES_URL +
                '3090187e-6348-4290-a878-af1b2b48c114?format=webp'
              }
            />
          </div>
        </div>

        <div
          className="relative max-w-lg [@media(min-width:536px)]:mx-auto mx-3 top-[40%] lg:top-[50%] lg:-translate-y-1/2 py-9 flex backdrop-blur-[5px] rounded-xl"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(39, 42, 55, 0.52) 0%, rgba(39, 42, 55, 0.62) 100%)`,
          }}
        >
          <div
            className="w-full max-w-[540px] px-4 pb-6 mx-auto"
            onKeyDown={handleKeyDown}
          >
            <div className="w-full relative rounded-2xl bg-[#323644] h-[70px] px-8 pt-3">
              <svg
                viewBox="0 0 17 22"
                fill="none"
                className="absolute top-0 bottom-0 my-auto right-4 aspect-[17/22] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.249 4.75C12.249 5.74456 11.8539 6.69839 11.1507 7.40165C10.4474 8.10491 9.49356 8.5 8.499 8.5C7.50444 8.5 6.55061 8.10491 5.84735 7.40165C5.14409 6.69839 4.749 5.74456 4.749 4.75C4.749 3.75544 5.14409 2.80161 5.84735 2.09835C6.55061 1.39509 7.50444 1 8.499 1C9.49356 1 10.4474 1.39509 11.1507 2.09835C11.8539 2.80161 12.249 3.75544 12.249 4.75ZM1 18.868C1.03213 16.9004 1.83634 15.0242 3.23918 13.644C4.64202 12.2639 6.53109 11.4905 8.499 11.4905C10.4669 11.4905 12.356 12.2639 13.7588 13.644C15.1617 15.0242 15.9659 16.9004 15.998 18.868C13.6454 19.9468 11.0871 20.5035 8.499 20.5C5.823 20.5 3.283 19.916 1 18.868Z"
                  stroke="#A7A7A7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <label
                htmlFor="email-input-mobile"
                className="block text-sm text-[#A7A7A7]"
              >
                Benutzername:
              </label>
              <input
                type="text"
                id="email-input-mobile"
                className="focus:outline-none w-full pt-1 pr-4 inline-block bg-[#323644]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative w-full rounded-2xl bg-[#323644] h-[70px] px-8 pt-3 mt-5">
              <svg
                viewBox="0 0 17 22"
                fill="none"
                className="absolute top-0 bottom-0 my-auto right-4 aspect-[17/22] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9.25V5.5C13 4.30653 12.5259 3.16193 11.682 2.31802C10.8381 1.47411 9.69347 1 8.5 1C7.30653 1 6.16193 1.47411 5.31802 2.31802C4.47411 3.16193 4 4.30653 4 5.5V9.25M3.25 20.5H13.75C14.3467 20.5 14.919 20.2629 15.341 19.841C15.7629 19.419 16 18.8467 16 18.25V11.5C16 10.9033 15.7629 10.331 15.341 9.90901C14.919 9.48705 14.3467 9.25 13.75 9.25H3.25C2.65326 9.25 2.08097 9.48705 1.65901 9.90901C1.23705 10.331 1 10.9033 1 11.5V18.25C1 18.8467 1.23705 19.419 1.65901 19.841C2.08097 20.2629 2.65326 20.5 3.25 20.5Z"
                  stroke="#A7A7A7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <label
                htmlFor="password-input-mobile"
                className="block text-sm text-[#A7A7A7]"
              >
                Passwort:
              </label>
              <input
                type="password"
                id="password-input-mobile"
                className="focus:outline-none w-full pt-1 pr-4 inline-block bg-[#323644]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="pt-14">
              <button
                onClick={onSubmit}
                className="py-6 text-black rounded-full w-full text-center h-[68px] bg-primary bg-opacity-25 hover:primary-bg hover:bg-opacity-100 transition-all duration-200 hover:duration-300 hover:bg-gradient-to-tr"
              >
                Log In
              </button>
            </div>
            <div className="pt-6 text-secondary">
              Noch kein Mitglied?
              <Link
                href={'/internal/recruiting'}
                className="pl-4 duration-200 opacity-75 text-primary hover:opacity-100 decoration-transparent hover:duration-300"
              >
                Bewerben
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
