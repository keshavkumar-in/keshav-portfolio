import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Blog from "../components/Blog"

const blog = () => {
  return (
    <Layout>
      <Seo title="Blog" />
      <Blog />
    </Layout>
  )
}

export default blog
