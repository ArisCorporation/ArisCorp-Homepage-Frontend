import React, { useState, createContext } from 'react'

export const ShipTechnologieModalContext = createContext(0)

export const ShipTechnologieModalProvider = (props) => {
  const [selectedTech, setSelectedTech] = useState(0)

  return (
    <div>
      <ShipTechnologieModalContext.Provider value={[selectedTech, setSelectedTech]}>
        {props.children}
      </ShipTechnologieModalContext.Provider>
    </div>
  )
}
