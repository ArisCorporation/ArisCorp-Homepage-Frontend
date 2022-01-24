import { useState } from "react";
import { Dialog } from "@headlessui/react";
import DiscordIcon from "./icons/DiscordIcon";
import Image from "next/image";
import Link from "next/link";

const RectruitmentSection = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4">
      <h1 className="text-lg sm:text-3xl md:text-4xl">
        WIR SUCHEN NEUE <span className="text-primary">MITGLIEDER</span>
      </h1>
      <hr />
      <div className="px-4 mb-12">
        <h2 className="text-2xl">REKRUTIERUNG:</h2>
        <hr className="hr-short" />
        <p className="">
          Falls du nun Interesse hast dich bei uns zu bewerben, dann kannst du
          das ganz einfach über unseren Discord machen.
        </p>
      </div>
      <div className="py-12 mx-3 text-center border-l-2 border-solid border-secondary px-9 bg-[#00000040]">
        <p className="mt-5 text-secondary">Mitglied werden</p>
        <p className="py-1 pr-1">
          Es gibt ein paar Mindestanforderungen die du aber bestimmt erfüllen
          wirst.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="items-center px-4 pt-1 pb-2 mx-auto my-5 font-thin text-white transition-colors duration-300 rounded bg-secondary hover:text-gray-800"
        >
          Jetzt bewerben
        </button>

        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50"
          onClose={() => setIsOpen(false)}
          open={isOpen}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0" />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl bg-opacity-90 rounded-2xl">
              <Dialog.Title
                as="h3"
                className="py-4 text-2xl font-medium leading-6 text-secondary"
              >
                Bewerbung
                <hr />
              </Dialog.Title>
              <div className="text-sm text-white ">
                <h2 className="text-xl">Bewerben:</h2>
                <p className="mb-5">
                  Du solltest die Anforderungen erfüllen und eine
                  Aussagekräftige Bewerbung schreiben.
                </p>
                <div className="mb-5">
                  <h2 className="pt-5 text-xl text-white">ANFORDERUNGEN:</h2>
                  <ul className="ml-6">
                    <li
                      className={
                        "before:content-['»'] before:text-secondary before:mr-2 before:w-4 before:h-6 py-3"
                      }
                    >
                      <p className="inline pl-1">
                        Du solltest mindestens 21 Jahre alt sein.
                      </p>
                    </li>
                    <li
                      className={
                        "before:content-['»'] before:text-secondary before:mr-2 before:w-4 before:h-6 py-3"
                      }
                    >
                      <p className="inline pl-1">
                        Du solltest natürlich Spaß am spielen und an
                        gemeinschaftlichen Aktionen haben.
                      </p>
                    </li>
                    <li
                      className={
                        "before:content-['»'] before:text-secondary before:mr-2 before:w-4 before:h-6 py-3"
                      }
                    >
                      <p className="inline pl-1">
                        Außerdem wollen wir uns friedlich verhalten. Also
                        solltest du natürlich auch Spaß am friedlichen spielen
                        haben, und dein Interesse sollte darin bestehen die
                        Situation ruhig zu klären und nicht direkt den Abzug zu
                        betätigen.
                      </p>
                    </li>
                    <li
                      className={
                        "before:content-['»'] before:text-secondary before:mr-2 before:w-4 before:h-6 py-3"
                      }
                    >
                      <p className="inline pl-1">
                        Discord ist unsere Hauptplatform also solltest du auch
                        auf unseren Discord kommen und nicht scheu sein einfach
                        mal ein bisschen zu quatschen.
                      </p>
                    </li>
                  </ul>
                </div>
                <h2 className="mb-2 text-xl">Wie du dich bewirbst:</h2>
                <p>
                  Aktuell kannst du dich über unseren Discord bewerben, es gibt
                  einen extra Textkanal für Bewerbungen. Unser Recruitmentteam
                  wird sich schnellstmöglich darum kümmern!
                </p>
                <hr />
              </div>

              <div className="flex items-center mt-4">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-500 ease-in-out bg-gray-900 bg-opacity-50 border border-transparent rounded-md hover:bg-white hover:text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Schließen
                  </button>
                </div>
                <a
                  href="https://discord.gg/3y2Jm33qeZ"
                  className="px-4 py-1 mx-1 transition-all duration-200 ease-linear rounded hover:bg-white"
                >
                  <Image
                    src={
                      "https://cms.ariscorp.de/assets/90d5157b-2d6e-4ce2-af5a-9bf59343ec66"
                    }
                    alt="Discord Logo"
                    width={120}
                    height={64}
                  />
                </a>
                <a
                  href="https://robertsspaceindustries.com/orgs/ARISCORP"
                  className="px-4 py-1 mx-1 transition-all duration-200 ease-linear rounded hover:bg-white"
                >
                  <Image
                    src={
                      "https://cms.ariscorp.de/assets/74529b89-cf09-4b2d-bd65-5813097cd65b"
                    }
                    alt="RSI Logo"
                    width={120}
                    height={64}
                  />
                </a>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default RectruitmentSection;
