import { Fragment, useRef, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, TrashIcon } from '@heroicons/react/20/solid'

const useFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

  return [ htmlElRef, setFocus ] 
}

export default function MultipleCombobox ({ items, state, setState }) {
  const [query, setQuery] = useState('')
  const buttonRef = useRef(null)
  const [listRef, setListFocus] = useFocus()

  const filteredPeople =
    query === ''
      ? items
      : items.filter((item) =>
        item.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  const removeItem = (id) => {
    setState(state.filter(e => e.id != id))
  }

  return (
    <div className="w-2/3">
      {state.length > 0 && (
        <ul ref={listRef}>
          {state.map((item, i) => (
            <li className='flex w-full' key={item.id}>{item.name} <div onClick={() => removeItem(item.id)} className='right-0 flex ml-auto cursor-pointer'><TrashIcon className='w-4' /></div></li>
          ))}
        </ul>
      )}
      <Combobox value={state} onChange={setState} multiple>
        {({ open }) => (
          <div className="relative mt-1">
            <div className="relative w-full overflow-hidden text-left bg-[#111] rounded-lg shadow-md cursor-default focus:outline-none outline-none focus-visible:ring-0 sm:text-sm">
                <Combobox.Input
                  className="w-full py-2 pl-3 pr-10 bg-[#111] text-sm leading-5 border-none focus:ring-0 focus:outline-none outline-none"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(item) => item.name}
                  onClick={() => !open && buttonRef.current.click()}
                />
              <Combobox.Button ref={buttonRef} className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            {open && (
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="z-[60] space-y-2 text-left absolute w-full py-1 pl-0 mt-1 overflow-auto text-base list-none bg-[#111] bg-opacity-75 rounded-md shadow-lg max-h-60 ring-0 focus:outline-none sm:text-sm" static>
                  {filteredPeople.map((item) => (
                    <Combobox.Option
                      className={({ active }) =>
                        `relative py-2 cursor-pointer pl-10 pr-4 list-none select-none ${active ? 'bg-primary text-black' : ''
                        }`
                      }
                      key={item.id}
                      value={item}
                      onClick={() => buttonRef.current.click()}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {item.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-primary'
                                }`}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
            )}
          </div>
        )}
      </Combobox>
    </div>
  )
}
