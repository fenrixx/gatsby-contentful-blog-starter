import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const MainNavigation = () => {
    const data = useStaticQuery(graphql`
        {
          allContentfulContent {
            nodes {
                slug
                siteTitle
              }
          }
        }
      `)
    return <nav>
        {data.allContentfulContent.nodes.map(nav => (
            <ul>
                <li>
                    <Link to={nav.slug}>
                        {nav.siteTitle}
                    </Link>
                </li>
            </ul>
        ))}
    </nav>
}

export default MainNavigation