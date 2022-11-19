import React, { useEffect } from "react"
import { Link } from "gatsby"
import Banner from "../../../components/banner-component/banner"
import NextProject from "../../../components/nextProjectBrief-component/nextProjectBrief"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import {staticData} from '../../../data/kongadata'
import './kongaDesignProcess.scss';

// workMateImageAssets
let francisAvatarImg = 'https://res.cloudinary.com/dramages/image/upload/v1603814273/portfolioImages/portfolioOnKonga/francis.png';
let francisProfile = 'https://www.linkedin.com/in/francis-otuogbai/';
let tobbyAvatarImg = 'https://res.cloudinary.com/dramages/image/upload/v1603814293/portfolioImages/portfolioOnKonga/tobby.png';
let tobbyProfile = 'https://www.linkedin.com/in/tobi-akanni/';

// next project details
// let projectTitle = 'Aella App'
// let projectType = 'Fintech'
// let projectLink = '/projects/aellaFinanceApp/aellaFinDesignProcess'
// let projectDescription = `Finance is complex enough. People and Businesses deserve easy, straightforward products that works. deserve easy, straightforward products that works.`


const SecondPag = () => {

  useEffect(() => {
    let navButtons = document.querySelectorAll('.project01Button a');
    let stepHolder = document.querySelectorAll('.stepHolder');
    let steps = document.querySelectorAll('.step');

    const test = (e) => {
      const active_button = e.currentTarget;
      navButtons.forEach(norm_button => {
        norm_button.classList.remove("active");
      });

      active_button.classList.add("active");
    }
    navButtons.forEach((button) => button.addEventListener('click', test));

    // this function ▿ automates numbering of steps for design process

    const stepFiller = () => {
      steps.forEach((step, index)=> step.textContent =`Step ${index + 1} on Design System Development`);
    }
    stepFiller();

    // this function ▿ gets props of divs and classes for intersection observing

    const observeIntersection = (stepPos, navPos, thres, rutMargin) => {

      let hold =()=> {
        let num;
        if(thres) num = thres;
        else num = 0.4;
        return num;
      }

      let rootMar =()=> {
        let rootNum;
        if(rutMargin) rootNum = rutMargin;
        else rootNum = 0;
        return JSON.stringify(rootNum) + 'px';
      }

      console.log(rootMar());
        
      const options = {
        root: null,
        threshold: hold(),
        rootMargin: rootMar()
      };

      let observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
          if (entry.isIntersecting) {
              navButtons[navPos].classList.add('active');
          }
          else {
            navButtons[navPos].classList.remove('active');
          }
        });
      }, options)

      observer.observe(stepHolder[stepPos]);
    }

    observeIntersection(0,0);
    observeIntersection(1,1);
    observeIntersection(2,2);
    observeIntersection(3,3);
    observeIntersection(4,4);
    
  },[]);

  let kongaData = staticData.projectKonga;
  
  let kongaBanner =   <Banner 
                        bgColor={kongaData[0].bgColor}
                        logo={kongaData[0].logo}
                        logoHeight={kongaData[0].logoHeight}
                        type={kongaData[0].type}
                        bannerImg={kongaData[0].bannerImg}
                        description={kongaData[0].description}
                      />

  return (
    <Layout>
      <SEO title="Design System for E-commerce" />
      <div className='kongaWapper' >
        
          <div className='kongaContentInfo'>
            <div id='brief' className='banner stepHolder mobilePadder'>
              {kongaBanner}
              <div className='role'>
                <h1>{kongaData[1].title}</h1>
              </div>

              <div className='DSexplained'>

                <div className='DSexplainedInfo'>
                  <p>
                    {kongaData[1].para}
                  </p>
                  <p>
                    {kongaData[1].para1}
                  </p>
                  <p>
                    {kongaData[1].para2}
                  </p>
                </div>

                <div className='DSexplainedAsset'>
                  <img src={kongaData[1].image} alt="img"/>
                  <a href={kongaData[1].imageCredit}> image source: Audrey Hacq </a>
                </div>
                
              </div>
            </div>

            <div id='atomicDesign' className='sectionHolder stepHolder mobilePadder stepOneProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 1 on Design System Development</span>
                <h1>{ kongaData[2].title }</h1>
                <p> {kongaData[2].para } </p>
                <img className='img1' src={kongaData[2].image1} alt="img"/>
                <p> {kongaData[2].para1 } </p>

                <h3>Simple Example with Konga's Header Component</h3>
                <img className='img2' src={kongaData[2].image2} alt="img"/>
                <p> {kongaData[2].para2 } </p>
                <h3>Extracted Atomic elements from header component</h3>
                <img className='img2' src={kongaData[2].image3} alt="img"/>
                <p> {kongaData[2].para3 } </p>
              </div>
            </div>
            
            <div id='component' className='sectionHolder stepHolder mobilePadder stepTwoProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 2 of design process</span>
                <h1>{ kongaData[3].title }</h1>
                <p> {kongaData[3].para } </p>
                <img className='img1' src={kongaData[3].image} alt="img"/>
                <video loop="true" autoplay="autoplay" muted>
                  <source src={kongaData[3].video1} type="video/mp4" />
                </video>
                <h3>Responsive Components with constraints</h3>
                <p> {kongaData[3].para2 } </p>
                <video loop="true" autoplay="autoplay" muted>
                  <source src={kongaData[3].video2} type="video/mp4" />
                </video>
                <p> {kongaData[3].para3 } </p>
              </div>
              
            </div>

            <div id='designSystem' className='sectionHolder stepHolder mobilePadder stepThreeProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 3 of design process</span>
                <h1>{ kongaData[4].title }</h1>
                <div className='stepThreeProcessFlow'>
                  <p> {kongaData[4].para } </p> 
                  <img src={kongaData[4].image } alt="img"/>
                </div>
              </div>
            </div>
            
            <div id='mockups' className='sectionHolder stepHolder mobilePadder stepFourProcess'>
                <div className='sectionHolderDescription'>
                  <span className='step'>Step 4 of design process</span>
                  <h1>{ kongaData[5].title }</h1>
                  <p> {kongaData[5].para } </p> 
                  <img src={kongaData[5].image } alt="img"/>
                </div>
                <div className='stepFiveProcessConclusion'>
                  <h3>Learns Learnt</h3>
                  <ul>
                    <li>Proper Research and wireframe prototype shouldn't be taken for granted, as it might cost the business lots of money and time 
                      if things are not properly structured in the initial stage of the project.</li>
                  
                    <li>I had the privilegde to work with talented developers, where I learnt basic workings of web technology, and this have helped me in making better UX/UI Decisions when designing digital solutions.</li>
                  </ul>
                </div>
            </div>

            <div className='workMateHolder mobilePadder'>
                <h3>Design Team</h3>
                <p>
                Working with Francis and Toby, broaden my understanding on 
                building complex digital solution.
                </p>

                <div className="workMateGroup">

                  <div className='workMate'>
                    <img src={tobbyAvatarImg} alt="img"/>
                    <span>
                      <b>Tobi Akanni</b>
                      <a target='_blank' href={tobbyProfile}>Visit LinkedIn</a>
                    </span>
                  </div>

                  <div className='workMate'>
                    <img src={francisAvatarImg} alt="img"/>
                    <span>
                      <b>Francis Otuogbai</b>
                      <a target='_blank' href={francisProfile}>Visit LinkedIn</a>
                    </span>
                  </div>

                </div>
                
            </div> 
            
            {/* < NextProject
              type = {projectType}
              projectName = {projectTitle}
              description = {projectDescription}
              link = {projectLink}
            /> */}

          </div>

        <div className='project01StickyNav'>
          <div className='project01Button'>
            <Link to='#'> Brief </Link>
            <Link to='#atomicDesign'> Atomic Design </Link>
            <Link to='#component'> Building Components </Link>
            <Link to='#designSystem'> Design System </Link>
            <Link to='#mockups'> High Fidelity MockUps </Link>
          </div>
        </div>
        
      </div>

    </Layout>
  )
}



export default SecondPag
