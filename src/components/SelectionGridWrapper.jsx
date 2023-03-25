const SelectionGridWrapper = ({children}) => {
  return (
    <div className='grid grid-cols-1 px-2 lg:grid-cols-2 1.5xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 gap-x-6 gap-y-4'>
      {children}
    </div>
  )
}

export default SelectionGridWrapper
