const path = require(`path`)
const slash = require(`slash`)

// Create Project Page
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // we use the provided allContentfulProjects query to fetch the data from Contentful
  const result = await graphql(`
    {
      projectData: allContentfulProjects {
        edges {
          node {
            id
            projectName
            slug
            description {
              description
            }
            projectImage {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
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
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const projects = result.data.projectData.edges
  // Resolve the paths to our template
  const projectTemplate = path.resolve("./src/templates/project.js")

  // Then for each result we create a page.
  projects.forEach(project => {
    createPage({
      path: `/portfolio/${project.node.slug}/`,
      component: slash(projectTemplate),
      context: {
        slug: project.node.slug,
      },
    })
  })
}
