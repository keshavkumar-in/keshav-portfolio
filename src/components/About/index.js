import React, { useState } from "react"
// import "./About.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  const [visibleTab, setVisibleTab] = useState("education")

  return (
    <section className="about sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about__img">
            <div className="about__img-box">
              <StaticImage
                src="../../../static/media/about-img.png"
                alt="Keshav Kumar"
              />
            </div>
          </div>
          <div className="about__text">
            <p>
              I'm a Full-Stack Web Developer from India. I have been developing
              websites since 2015. I started developing websites for local
              businesses as a Freelancer using WordPress and then shifted to PHP
              &amp; MySQL. I have worked as a Web Developer in a 5-Star Hotel in
              their IT team for 1 year. I had used PHP &amp; MySQL there for
              their website maintenance. Currently, my personal preference is
              MERN (MongoDB, ExpressJs, ReactJs &amp; NodeJs) Stack and I am
              learning &amp; developing projects on MERN Stack only.
            </p>
            <h3>skills</h3>
            <div className="about__text-skills">
              <div className="skill-item">html</div>
              <div className="skill-item">css</div>
              <div className="skill-item">scss</div>
              <div className="skill-item">javascript</div>
              <div className="skill-item">bootstrap</div>
              <div className="skill-item">php</div>
              <div className="skill-item">mysql</div>
              <div className="skill-item">mongodb</div>
              <div className="skill-item">express</div>
              <div className="skill-item">reactjs</div>
              <div className="skill-item">nodejs</div>
              <div className="skill-item">firebase</div>
            </div>
            <div className="about__text-tabs">
              <button
                type="button"
                className={
                  visibleTab === "education" ? "tab-item active" : "tab-item"
                }
                onClick={() => setVisibleTab("education")}
              >
                education
              </button>
              <button
                type="button"
                className={
                  visibleTab === "experiences" ? "tab-item active" : "tab-item"
                }
                onClick={() => setVisibleTab("experiences")}
              >
                experiences
              </button>
            </div>
            <div
              className={
                visibleTab === "education"
                  ? "about__text-tab-content active"
                  : "about__text-tab-content"
              }
            >
              <div className="about__text-tab-content-timeline">
                <div className="about__text-tab-content-timeline-item">
                  <span className="date">2019-2020</span>
                  <h4>
                    master of computer application - <span>IGNOU</span>
                  </h4>
                  <p>
                    <strong>Relevant Coursework:</strong> Software Engineering,
                    Operating Systems, Advanced Database Management Systems
                    &amp; Advanced Internet Technologies.
                  </p>
                </div>
                <div className="about__text-tab-content-timeline-item">
                  <span className="date">2016-2018</span>
                  <h4>
                    bachelor of computer application - <span>IGNOU</span>
                  </h4>
                  <p>
                    <strong>Relevant Coursework:</strong> Problem Solving and
                    Programming, Systems Analysis and Design, Internet Concepts
                    and Web Design, Communication Skills &amp; Data and File
                    Structures.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                visibleTab === "experiences"
                  ? "about__text-tab-content active"
                  : "about__text-tab-content"
              }
            >
              <div className="about__text-tab-content-timeline">
                <div className="about__text-tab-content-timeline-item">
                  <span className="date">2019 - 2020</span>
                  <h4>
                    web developer -{" "}
                    <span>hotel patliputra continental, patna</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, porro laboriosam molestias id mollitia maxime!
                  </p>
                </div>
              </div>
            </div>
            <a
              href="/resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              download CV
            </a>
            <Link to="/contact" className="btn">
              contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
