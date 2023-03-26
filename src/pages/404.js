import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <section className="page__404 sec-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>404</h1>
            </div>
            <div className="page__404-image"></div>
            <div className="page__404-content">
              <div className="page__404-content-box">
                <h2>Looks like you're lost</h2>

                <p>the page you are looking for not available!</p>

                <Link to="/" className="btn">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
