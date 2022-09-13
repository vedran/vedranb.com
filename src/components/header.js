import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Header = ({ isRootPage }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <nav style={{ display: "flex", alignItems: "center", height: 50 }}>
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
          display: `inherit`,
        }}
        to={"/"}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div>
          <div style={{ fontSize: 20, fontWeight: 500, lineHeight: "25px" }}>
            {author}
          </div>
          <div style={{ fontSize: 14, lineHeight: "25px", color: "grey" }}>
            Thoughts & projects
          </div>
        </div>
      </Link>
    </nav>
  )
}

export default Header
