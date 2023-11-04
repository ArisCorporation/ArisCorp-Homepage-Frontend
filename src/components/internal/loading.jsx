import ArisCorpGlowLogo from 'components/icons/ArisCorpGlowLogo'

const InternalLoading = () => {
  return (
    <div className='max-h-screen max-w-screen'>
      <div className='flex justify-center w-full pt-[5%]'>
        <ArisCorpGlowLogo width="1000px" animate={true} />
      </div>
      <div>
        <h1 className='absolute w-full text-center bottom-[20%] opacity-15 text-primary'>ArisCorp Management System is Loading<span style={{ clipPath: 'inset(0 3ch 0 0)' }} className='animate-loading'>. . .</span></h1>
        <h1 className='absolute w-full text-center bottom-[20%]'>ArisCorp Management System is Loading<span style={{ clipPath: 'inset(0 3ch 0 0)' }} className='animate-loading'>. . .</span></h1>
        <h1 className='absolute w-full text-center bottom-[20%] ani1mate-pulse-slow blur-xl text-primary'>ArisCorp Management System is Loading<span style={{ clipPath: 'inset(0 3ch 0 0)' }} className='animate-loading'>. . .</span></h1>
      </div>
    </div>
  )
}

export default InternalLoading
