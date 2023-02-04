import React from "react"
import "./Portfolio.scss"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../seo"

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulProjects {
          edges {
            node {
              id
              projectName
              slug
              description {
                description
              }
              projectImage {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  layout: FULL_WIDTH
                )
              }
              techUsed
              role
              sourceCode
              demoLink
              createdAt(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `}
    render={portfolio => (
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
              {portfolio.allContentfulProjects.edges
                ? portfolio.allContentfulProjects.edges.map(project => {
                    return (
                      <div className="portfolio__item" key={project.node.id}>
                        <div className="portfolio__item-thumbnail">
                          <GatsbyImage
                            image={getImage(project.node.projectImage)}
                            alt={project.node.projectName}
                          />
                        </div>
                        <h3 className="portfolio__item-title">
                          {project.node.projectName}
                        </h3>
                        <Link
                          to={`/portfolio/${project.node.slug}`}
                          className="btn view-project-btn"
                        >
                          view project
                        </Link>
                      </div>
                    )
                  })
                : "Loading"}
            </div>
          </div>
        </section>
      </>
    )}
  ></StaticQuery>
)

export default Portfolio
