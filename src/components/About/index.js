import React, { useState } from "react"
import "./About.scss"
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
              &amp; MySQL. Currently, my personal preference is MERN (MongoDB,
              ExpressJs, ReactJs &amp; NodeJs) Stack and I am learning &amp;
              developing projects on MERN Stack.
            </p>
            <h3>skills</h3>
            <div className="about__text-skills">
              <div className="skill-item">html</div>
              <div className="skill-item">css</div>
              <div className="skill-item">scss</div>
              <div className="skill-item">javascript</div>
              <div className="skill-item">bootstrap</div>
              <div className="skill-item">mongodb</div>
              <div className="skill-item">express</div>
              <div className="skill-item">reactjs</div>
              <div className="skill-item">gatsbyjs</div>
              <div className="skill-item">nextjs</div>
              <div className="skill-item">nodejs</div>
              <div className="skill-item">firebase</div>
              <div className="skill-item">postman</div>
              <div className="skill-item">github</div>
              <div className="skill-item">on-page seo</div>
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
                  <span className="date">August 2019 - July 2020</span>
                  <h4>
                    web developer -{" "}
                    <span>hotel patliputra continental, patna</span>
                  </h4>
                  <div>
                    <ul>
                      <li>
                        - Managed front-end &amp; back-end development in
                        Company's Room Booking Web Application.
                      </li>
                      <li>
                        - Successfully identified, diagnosed and fixed website
                        problems, including broken links, typographical errors
                        &amp; formatting issues.
                      </li>
                      <li>
                        - Responsible for Apache based Dedicated Server
                        maintenance.
                      </li>
                      <li>
                        - Optimized site for usability, search engine
                        optimization and accessibility.
                      </li>
                      <li>
                        - Cooperated with IT team to provide support for guests.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about__text-tab-content-timeline-item">
                  <span className="date">August 2021 - Present</span>
                  <h4>
                    web developer -{" "}
                    <span>Bihar State Madrasa Education Board, Patna</span>
                  </h4>
                  <div>
                    <ul>
                      <li>
                        - Developing Board's new website and web application for
                        student management.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="/Keshav_Kumar_Resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              download="Keshav Kumar Resume"
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
