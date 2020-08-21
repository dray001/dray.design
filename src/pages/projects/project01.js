import React, { useEffect } from "react"
import { Link } from "gatsby"
import Heading from "../../components/heading-component/heading"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import staticdata from "./staticdata.js"
import './project01.scss';
// import { Router } from "@reach/router";

const SecondPage = () => {

  useEffect(() => {
    let navButtons = document.querySelectorAll('.project01Button a');

    const test = (e) => {
      const active_button = e.currentTarget
      navButtons.forEach(norm_button => {
        norm_button.classList.remove("active")
      });

      active_button.classList.add("active");
    }

    navButtons.forEach((button) => button.addEventListener('click', test));
  },[])

  return (
    <Layout>
      <SEO title="Page two" />
      <div className='project01Wapper' >
        <div className='project01Content'>

          <Brief />
          <Challenges moveTo={'challenges'} />
          <Brief moveTo={'point'} />

        </div>

        <div className='project01StickyNav'>
          <div className='project01Button'>
            <Link className='active' to='#'> Brief </Link>
            <Link to='#challenges'> Challenges </Link>
            <Link to='#point'> Approach to solution </Link>
            <Link to='#'> Wireframe </Link>
            <Link to='#'> High Fidelity Mockup </Link>
          </div>

        </div>


      </div>

    </Layout>
  )
}

export default SecondPage


const Brief = ({moveTo}) => {
  return (
    <section id={moveTo} className='secBrief'>
      <Heading size='42px' title={staticdata.projectAellaApp[0].title} />
      <div className='secBriefImg'>
        {/* image here */}
      </div>
      <div className='secBriefPara' dangerouslySetInnerHTML={{ __html: staticdata.projectAellaApp[0].para}} />
    </section>)
}

const Challenges = ({moveTo}) => {
  return (
    <section id={moveTo} className='secChallenges'>
      <Heading size='42px' title={staticdata.projectAellaApp[1].title} />
      <div className='secChallengesContent'>
      <div className='secChallengesPara' dangerouslySetInnerHTML={{ __html: staticdata.projectAellaApp[1].para }} />
        <div className='secChallengesImg'>
          {/* image here */}
        </div>
      </div>
      
    </section>)
}