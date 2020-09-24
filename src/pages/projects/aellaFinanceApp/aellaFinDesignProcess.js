import React, { useEffect } from "react"
import { Link } from "gatsby"
import Heading from "../../../components/heading-component/heading"
import Banner from "../../../components/banner-component/banner"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import {staticData} from '../../../data/aelladata'
import './aellaFinDesignProcess.scss';

const SecondPag = () => {

  useEffect(() => {
    let navButtons = document.querySelectorAll('.project01Button a');

    const test = (e) => {
      const active_button = e.currentTarget;
      navButtons.forEach(norm_button => {
        norm_button.classList.remove("active")
      });

      active_button.classList.add("active");
    }

    navButtons.forEach((button) => button.addEventListener('click', test));
  },[]);

  const dataCollector = (sectionName)=> {
    let sectionInfo = staticData.projectAellaApp;
    if(sectionName) {
      for(let i = 0; i <= sectionInfo.length; i++) {
      if(sectionInfo[i].id===sectionName)  {
        return (
          <Banner 
              bgColor={sectionInfo[i].bgColor}
              logo={sectionInfo[i].logo}
              logoHeight={sectionInfo[i].logoHeight}
              type={sectionInfo[i].type}
              bannerImg={sectionInfo[i].bannerImg}
              description={sectionInfo[i].description}
            />
          )
        }
      }
    }
     else {
        return (
          <div> something here </div>
        )
      } 
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <div className='project01Wapper' >
          <div>
            <Heading size='52px' title={staticData.projectAellaApp[2].title} />
            
            {dataCollector()}
            {dataCollector('Aella')}
            {dataCollector('Konga')}
           
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

export default SecondPag
