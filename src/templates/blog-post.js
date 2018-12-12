import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
	const post = data.allContentfulBlogPost.edges[0].node;

	return (
		<Layout>
		<div>
		<h1>{post.title}</h1>
		<div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
		</div>
		</Layout>
		)
	}
	
export const query = graphql`
	query($slug: String!) {
		allContentfulBlogPost(filter: { slug: { eq: $slug }}) {
			edges {
				node {
					id
					title
					slug
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