import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        return (
          <div>
            <h1>title: {data.site.siteMetadata.title}</h1>
            <h4>author: {data.site.siteMetadata.author}</h4>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
