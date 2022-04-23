import React, { useState, createContext } from 'react'

export const OurTabSelectionContext = createContext(0)

export const OurTabSelectionProvider = (props) => {
  const [selectedOurIndex, setSelectedOurIndex] = useState(0)

  return (
    <div>
      <OurTabSelectionContext.Provider
        value={[selectedOurIndex, setSelectedOurIndex]}
      >
        {props.children}
      </OurTabSelectionContext.Provider>
    </div>
  )
}
