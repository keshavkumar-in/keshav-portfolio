import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./Project.scss"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const project = ({ data }) => {
  const {
    projectName,
    description,
    projectImage,
    techUsed,
    role,
    sourceCode,
    demoLink,
    createdAt,
  } = data.contentfulProjects

  const ogImage = `https:${projectImage.fixed.src}`

  return (
    <Layout>
      <Seo
        title={projectName}
        description={description.description}
        ogImage={ogImage}
      />
      <section className="project sec-padding modal">
        <div className="container">
          <div className="row">
            <div className="project__content">
              <div className="project__content-header">
                <div className="project__content-header-thumbnail">
                  <GatsbyImage
                    image={getImage(projectImage)}
                    alt={projectName}
                  />
                </div>
                <h3>{projectName}</h3>
              </div>
              <div className="project__content-body">
                <div className="description">
                  <p>{description.description}</p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>
                      created - <span>{createdAt}</span>
                    </li>
                    <li>
                      technologies used -{" "}
                      <span className="tech-used">
                        {techUsed.map(tech => (
                          <span key={tech} className="tech-item">
                            {tech}
                          </span>
                        ))}
                      </span>
                    </li>
                    <li>
                      role - <span>{role}</span>
                    </li>
                    <li>
                      Source Code -{" "}
                      <span>
                        <a
                          href={sourceCode}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {sourceCode}
                        </a>
                      </span>
                    </li>
                    <li>
                      live demo -{" "}
                      <span>
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {demoLink}
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default project

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      id
      projectName
      slug
      description {
        description
      }
      projectImage {
        fixed {
          src
        }
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
`
