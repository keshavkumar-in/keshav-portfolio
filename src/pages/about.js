import React from "react"
import About from "../components/About"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const about = () => {
  return (
    <Layout>
      <Seo title="About Me" />

      <About />
    </Layout>
  )
}

export default about
