import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Modal ({ state, setState, closeFunction, title, subtitle, children, closeButton, customButton, z, wxl, wxxl }) {
  function closeModal () {
    setState(false)
  }
  return (
    <Transition appear show={state} as={Fragment}>
      <Dialog as="div" className={`relative z-[${z ? z : '99'}]`} onClose={closeFunction || closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"> */}
              <Dialog.Panel className={"w-full bg-[#222] transform relative box-border p-[2px] border-2 border-[#6f6f6f] rounded-3xl transition-all duration-500 ease before:absolute before:-top-[2px] before:right-20 before:left-20 before:h-[2px] before:bg-[#444] before:box-border after:absolute after:-bottom-[2px] after:right-20 after:left-20 after:h-[2px] after:bg-[#444] after:box-border " + (wxl ? "max-w-xl" : wxxl ? "max-w-2xl" : "max-w-lg")}>
                <div className='relative min-h-[40px] border-[3px] border-primary border-opacity-90 rounded-[20px] shadow-sm shadow-white box-border bg-[rgba(39,43,48,.9] before:absolute before:-top-[3px] before:right-10 before:left-10 before:box-border after:box-border before:h-1 before:bg-[#444] before:rounded-b after:absolute after:-bottom-[3px] after:right-10 after:left-10 after:h-1 after:bg-[#444] after:rounded-t'>
                  <div className='box-border py-2 rounded-2xl'>
                    <div className='absolute transition-all duration-200 opacity-50 cursor-pointer top-2 left-2 hover:opacity-100 hover:duration-300'><AiOutlineCloseCircle className='w-5 h-5' onClick={closeFunction || closeModal} /></div>
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-medium leading-6 text-white"
                      >
                        {title}
                        {subtitle && (
                          <span className='block'>
                            {subtitle}
                          </span>
                        )}
                      </Dialog.Title>
                    )}
                    {children}
                    {closeButton &&
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black transition-all duration-100 border border-transparent rounded-md hover:duration-200 bg-primary hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeFunction || closeModal}
                      >
                        Close!
                      </button>}
                    {customButton}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}




// <Transition appear show={shipModal} as={Fragment}>
//   <Dialog as="div" className="relative z-[99]" onClose={closeModal()}>
//     <Transition.Child
//       as={Fragment}
//       enter="ease-out duration-300"
//       enterFrom="opacity-0"
//       enterTo="opacity-100"
//       leave="ease-in duration-200"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <div className="fixed inset-0 bg-black/25" />
//     </Transition.Child>

//     <div className="fixed inset-0 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-full p-4 text-center">
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//             <Dialog.Title
//               as="h3"
//               className="text-lg font-medium leading-6 text-gray-900"
//             >
//               Payment successful
//             </Dialog.Title>
//             <div className="mt-2">
//               <p className="text-sm text-gray-500">
//                 Your payment has been successfully submitted. We’ve sent
//                 you an email with all of the details of your order.
//               </p>
//             </div>

//             <div className="mt-4">
//               <button
//                 type="button"
//                 className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                 onClick={closeModal()}
//               >
//                 Got it, thanks!
//               </button>
//             </div>
//           </Dialog.Panel>
//         </Transition.Child>
//       </div>
//     </div>
//   </Dialog>
// </Transition>