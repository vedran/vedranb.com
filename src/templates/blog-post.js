import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider } from "theme-ui"
import theme from "./theme"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Form from "../components/form"

const shortcodes = {
  Form,
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          location={this.props.location}
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          featuredImage={post.frontmatter.featuredImage || null}
        />
        <article>
          <header>
            <h1
              style={{
                fontWeight: "600",
                marginTop: rhythm(1),
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.title}
            </h1>
          </header>
          <ThemeProvider theme={theme}>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </ThemeProvider>
          <footer></footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              marginTop: `3rem`,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage
      }
    }
  }
`
