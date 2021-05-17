import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Home from "../components/Home"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
