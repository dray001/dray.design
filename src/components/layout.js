/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header-component/header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulText {
        edges {
          node {
            landingTitle
          }
        }
      }
    }
  `)

const [state, setState] = useState(false);

useEffect(
  ()=> {
    window.addEventListener('scroll', handleScroll)
  },
[]);

const handleScroll = (event) => {
  const scrollTop = window.pageYOffset;
  if(scrollTop > 50) {
    setState(true);
  }
  else {
    setState(false);
  }
}

  return (
    <>
      <header className = {state ? 'pageHeader sadow' : 'pageHeader'} >
        <Header  siteTitle={data.site.siteMetadata.title} />
      </header>
      
      <div className='childrenWrapper'>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
