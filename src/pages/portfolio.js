import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Portfolio from "../components/Portfolio"

const portfolio = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Portfolio />
    </Layout>
  )
}

export default portfolio
