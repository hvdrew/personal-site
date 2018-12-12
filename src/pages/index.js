import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

export default ({ data }) => {

  let slugs = data.allContentfulBlogPost.edges.map((item) => {
    return <Link to={`/${item.node.slug}`}>{item.node.title}</Link>
  })

  console.log(slugs)

  return (
    <Layout>
      {slugs}
      <h1>Hi people</h1>
      <p dangerouslySetInnerHTML={{
        __html: data.allContentfulBlogPost.edges[0].node.body.childMarkdownRemark.html
      }}></p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
          title
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
  `