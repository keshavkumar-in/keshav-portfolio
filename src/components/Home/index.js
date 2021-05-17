import React from "react"
// import "./Home.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Home = () => {
  return (
    <section className="home align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="home__text">
            <p>Hello, I'm</p>
            <h1>Keshav Kumar</h1>
            <h2>full stack web developer, based in India.</h2>
            <Link to="/about" className="btn">
              more about me
            </Link>
            <Link to="/portfolio" className="btn">
              portfolio
            </Link>
          </div>
          <div className="home__img">
            <div className="home__img-box">
              <StaticImage
                src="../../../static/media/profile-img.png"
                alt="Keshav Kumar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
