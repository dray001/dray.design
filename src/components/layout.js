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
import Footer from "./footer-component/footer"
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
  },
[]);

const handleScroll = () => {
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
          <div className='blocker'>
                <h1> Adding finishing touches </h1>
          </div>
      <div className='pageWrapper'>
      
        <main>
          <div className = {state ? 'pageHeader sadow' : 'pageHeader'} >
          <Header modalState={false} siteTitle={data.site.siteMetadata.title} />
          </div>
          <div className='childrenWrapper'>
            {children}
            <Footer />
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
