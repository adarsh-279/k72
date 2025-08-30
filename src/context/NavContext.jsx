import React, { createContext, useState } from 'react'

const NavContext = ({ children }) => {
    
    const NavContext = createContext()
    const [navOpen, setnavOpen] = useState(false)

  return (
    <div>
      <NavContext.Provider value={[navOpen, setnavOpen]}>
        {children}
      </NavContext.Provider>
    </div>
  );
}

export default NavContext