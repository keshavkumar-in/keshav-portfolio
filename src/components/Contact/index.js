import React from "react"
import "./Contact.scss"
import Seo from "../seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
library.add(fab)

const Contact = () => {
  return (
    <>
      <Seo title="Contact Me" />
      <section className="contact sec-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>contact me</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact__info ">
              <h1>
                Have a project?
                <br />
                Let's talk about it!
              </h1>
              <div className="contact__button">
                <a
                  href="mailto:kkeshav1709@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="social">
              <h2>Connect with me:</h2>
              <div className="social__links">
                <ul>
                  <li>
                    <a
                      href="https://github.com/keshavkumar-in"
                      alt="Github"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="icon"
                        icon={["fab", "github"]}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/keshavkumar-in/"
                      alt="LinkedIn"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="icon"
                        icon={["fab", "linkedin-in"]}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/keshavkumar_in"
                      alt="Twitter"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="icon"
                        icon={["fab", "twitter"]}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/keshavkumar_in"
                      alt="Instagram"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="icon"
                        icon={["fab", "instagram"]}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
