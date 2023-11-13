import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion";

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function Dropdown ({ changeAction, items, state, setState, mode, disabled, bg, animate }) {
  return (
    <div className="w-full">
      <Listbox value={state} onChange={(event) => (changeAction ? changeAction(event) : setState(event))} disabled={disabled}>
        <div className="relative mt-1">
          <motion.div whileTap={(animate && { scale: 0.97 })}>
            <Listbox.Button className={`relative w-full cursor-default rounded-lg bg-${!bg ? "[#111]" : bg} py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-none focus-visible:ring-0 sm:text-sm ` + (disabled && 'opacity-25')}>
              {mode == "departments" && <span className="block truncate">{state?.gameplay_name || state || 'Abteilung...'}</span>}
              {mode == "roles" && <span className="block truncate">{state?.name || 'Berechtigungs Rolle...'}</span>}
              {!mode && <span className="block truncate">{state || 'Selection...'}</span>}
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </motion.div>
          {/* <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          > */}
            <Listbox.Options className="z-[60] space-y-2 text-left absolute w-full py-1 pl-0 mt-1 overflow-auto text-base list-none bg-[#111] bg-opacity-75 rounded-md shadow-lg max-h-60 ring-0 focus:outline-none sm:text-sm">
              <Listbox.Option
                className="relative py-2 text-center list-none cursor-pointer select-none placeholder:r-4 hover:bg-primary hover:text-black"
                onClick={() => (changeAction ? changeAction() : setState())}
              >
                <span
                  className="block font-medium truncate"
                >
                  Keine Abteilung!
                </span>
              </Listbox.Option>
              {items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative py-2 cursor-pointer pl-10 pr-4 list-none select-none ${active ? 'bg-primary text-black' : ''
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {mode == "departments" && item.gameplay_name}
                        {mode == "roles" && item.name}
                      </span>
                      {selected ? (
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${selected ? 'text-primary' : 'text-white'}`}>
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          {/* </Transition> */}
        </div>
      </Listbox>
    </div>
  )
}
