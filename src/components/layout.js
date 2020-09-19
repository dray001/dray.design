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
    }
  `)

const [state, setState] = useState(false);

useEffect(
  ()=> {
    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('load', resetScroll);
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
      <div className='pageWrapper'>
        <main>
          <div className = {state ? 'pageHeader sadow' : 'pageHeader'} >
          <Header modalState={false} siteTitle={data.site.siteMetadata.title} />
          </div>
          <div className='childrenWrapper'>
            {children}
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </main>
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
