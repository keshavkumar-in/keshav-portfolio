import React from "react"
import "./Portfolio.scss"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../seo"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allContentJson {
        totalCount
        edges {
          node {
            projects {
              created
              description
              live_demo_link
              project_name
              role
              tech_used
              project_image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  const portfolio = data.allContentJson.edges[0].node

  return (
    <>
      <Seo title="Portfolio" />
      <section className="portfolio sec-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>recent works</h2>
            </div>
          </div>
          <div className="row">
            {portfolio.projects
              ? portfolio.projects.map((project, i) => {
                  return (
                    <div className="portfolio__item" key={i}>
                      <div className="portfolio__item-thumbnail">
                        <GatsbyImage
                          image={getImage(project.project_image)}
                          alt={project.project_name}
                        />
                      </div>
                      <h3 className="portfolio__item-title">
                        {project.project_name}
                      </h3>
                      <button type="button" className="btn view-project-btn">
                        view project
                      </button>

                      <div className="portfolio__item-details">
                        <div className="description">
                          <p>{project.description}</p>
                        </div>
                        <div className="general-info">
                          <ul>
                            <li>
                              created - <span>{project.created}</span>
                            </li>
                            <li>
                              technologies used -{" "}
                              <span>{project.tech_used}</span>
                            </li>
                            <li>
                              role - <span>{project.role}</span>
                            </li>
                            <li>
                              live demo -{" "}
                              <span>
                                <a
                                  href={project.live_demo_link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {project.live_demo_link}
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                })
              : "Loading"}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
