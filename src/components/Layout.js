import React, { useState } from "react"
import "./Layout.scss"

import Header from "./Header"

const Layout = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <div className="bg-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>
      <div className="main">
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <div className={`${navbarOpen ? "main__active" : ""}`}>{children}</div>
      </div>
    </>
  )
}

export default Layout
