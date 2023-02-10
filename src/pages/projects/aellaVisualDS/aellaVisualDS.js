import React, { useEffect } from "react"
import { Link } from "gatsby"
import Banner from "../../../components/banner-component/banner"
// import NextProject from "../../../components/nextProjectBrief-component/nextProjectBrief"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import {staticData} from '../../../data/aellaVDS'
import './aellaVisualDS.scss'

// next project details
let projectTitle = 'Konga'
let projectType = 'E-commerce'
let projectLink = '/projects/konga/kongaDesignProcess'
let projectDescription = `Konga is one of Nigeria's largest online mall. offering products that span various categories including Phones...`

const SecondPag = () => {

  useEffect(() => {
    let navButtons = document.querySelectorAll('.project01Button a');
    let stepHolder = document.querySelectorAll('.stepHolder');
    // let bdy = document.getElementsByTagName("BODY")[0];

    const test = (e) => {
      const active_button = e.currentTarget;
      // bdy.style.scrollBehavior = 'auto';
      navButtons.forEach(norm_button => {
        norm_button.classList.remove("active");
      });

      active_button.classList.add("active");
    }
    navButtons.forEach((button) => button.addEventListener('click', test));

    // this function ▿ gets props of divs and classes for intersection observing

    const observeIntersection = (stepPos, navPos, thres, rutMargin) => {

      let hold =()=> {
        let num;
        if(thres) num = thres;
        else num = 0.5;
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
    // observeIntersection(5,5);
    // observeIntersection(6,6);
    // observeIntersection(7,7);
    // observeIntersection(8,8);
    // observeIntersection(9,9,0.3,150);
    
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

  let aellaData = staticData.projectAellaApp;

  return (
    <Layout>
      <SEO title="Fintech App Design Process" />
      <div className='wrapper' >
        
          <div className='content'>

            <div id='process' className='process stepHolder mobilePadder'>

            <img src={aellaData[0].image} alt="image" />

              <h1>{aellaData[0].title}</h1>
              <p>
              {aellaData[0].para1}
              </p>
              <p>
              {aellaData[0].para2}
              </p>
              <video loop="true" autoplay="autoplay" muted>
                <source src={aellaData[0].video} type="video/mp4" />
              </video>

              <p dangerouslySetInnerHTML={{ __html: aellaData[0].para3}} />
              
            </div>

            <div id='cardDesign' className='idCard stepHolder mobilePadder'>

              <h1>{aellaData[1].title}</h1>
              <p>
              {aellaData[1].para1}
              </p>
              <img src={aellaData[1].img1} alt="image" />
              <img src={aellaData[1].img2} alt="image" />
              
            </div>

            <div id='socials' className='socials stepHolder mobilePadder'>

              <h1>{aellaData[2].title}</h1>
              <p>
              {aellaData[2].para1}
              </p>
              <img src={aellaData[2].img} alt="image" />
              <video loop="true" autoplay="autoplay" muted>
                <source src={aellaData[2].video} type="video/mp4" />
              </video>
              
            </div>

            <div id='doc' className='docs stepHolder mobilePadder'>

              <h1>{aellaData[3].title}</h1>
              <p>
              {aellaData[3].para1}
              </p>
              <video loop="true" autoplay="autoplay" muted>
                <source src={aellaData[3].vid1} type="video/mp4" />
              </video>
              <video loop="true" autoplay="autoplay" muted>
                <source src={aellaData[3].vid2} type="video/mp4" />
              </video>
              <video loop="true" autoplay="autoplay" muted>
                <source src={aellaData[3].vid3} type="video/mp4" />
              </video>
              
            </div>

            <div id='conclusion' className='mobilePadder stepHolder'>

                <div className='stepOneProcessBreakdown'>
                  <h1>{aellaData[4].title}</h1>
                  <ul>
                    <li>{aellaData[4].list1}</li>
                    <li>{aellaData[4].list2}</li>
                  </ul>
                </div>

            </div>

            {/* < NextProject
              type = {projectType}
              projectName = {projectTitle}
              description = {projectDescription}
              link = {projectLink}
            /> */}
           
          </div>

        <div className='contentNav'>
          <div className='project01Button'>
            <Link to='#process'> Brief </Link>
            <Link to='#cardDesign'> Card Design </Link>
            <Link to='#socials'> Social Media </Link>
            <Link to='#doc'> Documents </Link>
            <Link to='#conclusion'> Conclusion </Link>
          </div>
        </div>

      </div>

    </Layout>
  )
}

const Brief = ({title,description,image, imgHeight}) => 
<div className= 'briefContent'>
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  <img style = {{height: `${imgHeight}`}} src={image} alt="img"/>
</div>

export default SecondPag
