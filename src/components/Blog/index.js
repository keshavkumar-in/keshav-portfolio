import React from "react"
import "./Blog.scss"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../seo"

const Blog = () => (
  <StaticQuery
    query={graphql`
      {
        allDevblogPost(limit: 6) {
          edges {
            node {
              brief
              coverImage
              dateAdded
              slug
              title
              id
            }
          }
        }
      }
    `}
    render={blog => (
      <>
        <Seo title="Blog" />
        <section className="blog sec-padding">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>recent blog posts</h2>
              </div>
            </div>
            <div className="row">
              {blog.allDevblogPost.edges
                ? blog.allDevblogPost.edges.map(post => {
                    return (
                      <div className="blog__item" key={post.node.id}>
                        <div className="blog__item-thumbnail">
                          <img
                            src={post.node.coverImage}
                            alt={post.node.title}
                            width="100%"
                            height="200"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="blog__item-title">{post.node.title}</h3>
                        <p>{`${post.node.brief.substring(0, 150)}...`}</p>
                        <a
                          href={`https://blog.keshavkumar.in/${post.node.slug}`}
                          className="btn view-project-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Read More
                        </a>
                      </div>
                    )
                  })
                : "Loading..."}
            </div>
          </div>
        </section>
      </>
    )}
  ></StaticQuery>
)

export default Blog
