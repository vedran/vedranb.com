import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Header from "components/header"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            email
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPage = location.pathname === rootPath
  const social = data.site.siteMetadata.social

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Header isRootPage={isRootPage} />
      </header>
      <main>{children}</main>
      <footer style={{ display: "flex", justifyContent: "flex-end" }}>
        <a href="https://www.linkedin.com/in/vedran-budimcic/">linkedin</a>
        <div
          style={{ display: "inline-block", width: 20, textAlign: "center" }}
        >
          •
        </div>
        <a href={`https://twitter.com/${social.twitter}`}>twitter</a>
        <div
          style={{ display: "inline-block", width: 20, textAlign: "center" }}
        >
          •
        </div>
        <a href={`https://www.github.com/${social.github}`}>github</a>
        <div
          style={{ display: "inline-block", width: 20, textAlign: "center" }}
        >
          •
        </div>
        <a href={`mailto:${social.email}`}>email</a>
      </footer>
    </div>
  )
}

export default Layout
