import React, { useEffect } from "react"
import { Link } from "gatsby"
import Banner from "../../../components/banner-component/banner"
import NextProject from "../../../components/nextProjectBrief-component/nextProjectBrief"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import {staticData} from '../../../data/aelladata'
import './aellaFinDesignProcess.scss';

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
    observeIntersection(5,5);
    observeIntersection(6,6);
    observeIntersection(7,7);
    observeIntersection(8,8);
    observeIntersection(9,9,0.3,150);
    
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
      <div className='aellaWapper' >
        
          <div className='aellaContentInfo'>
            <div id='brief' className='banner stepHolder mobilePadder'>
              {dataCollector('Aella')}
            {/* <Heading size='52px' title={aellaData[1].title} /> */}
              <div className='role'>
                <h1>Introduction</h1>
                <p>
                {aellaData[1].para}
                </p>
              </div>
            </div>

            <div className='designBrief mobilePadder'>
              <h1>Design Brief</h1>
              <p>
              Business requirement is to make Aella a super financial solution that solves day to day financial 
              problems for an average Nigerian.
              <br/>This solutions includes:
              </p>
              <div className='briefCards'>
                <Brief 
                title="Aella Credit"
                description="Get simple and easy access to funds."
                image="https://res.cloudinary.com/dramages/image/upload/v1601222855/portfolioImages/portfolioOnAella/walletIcon.png"
                imgHeight='64px'
                />

                <Brief 
                title="Aella Notes"
                description="Invest the smart way on Aella Notes."
                image="https://res.cloudinary.com/dramages/image/upload/v1601226741/portfolioImages/portfolioOnAella/noteIcon.png"
                imgHeight='92px'
                />

                <Brief 
                title="Aella Care"
                description="Get affordable insurance plans."
                image="https://res.cloudinary.com/dramages/image/upload/v1601224778/portfolioImages/portfolioOnAella/insuranceIcon.png"
                imgHeight='72px'
                />

                <Brief 
                title="Payments"
                description="Bill payments made easy."
                image="https://res.cloudinary.com/dramages/image/upload/v1601224822/portfolioImages/portfolioOnAella/paymentIcon.png"
                imgHeight='92px'
                />
                
              </div>
            </div>

            <div id='solution' className='sectionHolder mobilePadder stepHolder stepOneProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 1 of design process</span>
                <h1>{ aellaData[2].title }</h1>
                <p> {aellaData[2].para } </p>
              </div>

              <div className='stepOneProcessBreakdownHolder'>
                <div className='stepOneProcessBreakdown'>
                  <h3>My Observation</h3>
                  <ul>
                    <li>User Journey can be complicated and long so users waste lots of time navigating around the program Interface.</li>
                    <li>Also digital banking solution are less smart making users having to do alot of repetitive task.</li>
                    <li>Poor visual heirachy can really confuse users, proper application of the principle of design, can really create a seemless experience for users.</li>
                  </ul>
                </div>

                <div className='stepOneProcessBreakdown'>
                  <h3>Design Goals</h3>
                  <ul>
                    <li>A seemless experience for users, using key design principles, like Emphasis to direct users to important informations, and needful actions to perform.</li>
                    <li>Develop a workable Design System to create consistency and effective collaboration between designers and developers.</li>
                    <li>Design should follow the modern mobile environment, including iOS UI and Android UI, and can accommodate different devices.</li>
                  </ul>
                </div>
              </div>

            </div>
            
            <div id='personas' className='sectionHolder mobilePadder stepHolder stepTwoProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 2 of design process</span>
                <h1>{ aellaData[3].title }</h1>
                <p> {aellaData[3].para } </p>  
              </div>
              <div className= 'personaHolder'>
                <div className='personaSection'>
                  <img src="https://res.cloudinary.com/dramages/image/upload/v1601286524/portfolioImages/portfolioOnAella/personaShe.jpg" alt="img"/>
                  <div>
                    <h3>First, Meet Aishat</h3>
                    <p>
                    A busy family Mum that owns a small resturant which she uses in supporting the family financially, 
                    but Aishat complains on how she spend alot of time in the bank fixing all the transactions she 
                    has to carry for the week.
                    </p>
                  </div>
                </div>

                <div className='personaSection'>
                  <img src="https://res.cloudinary.com/dramages/image/upload/v1601286457/portfolioImages/portfolioOnAella/personaHe.png" alt="img"/>
                  <div>
                    <h3>And here's Uche</h3>
                    <p>
                    A Fresh bachelor who just got a paying job, and has alot of financial responsibility, Uche has always wished there was a good 
                    credit system with easy access to fund, as this will ease his financial struggles.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='stepTwoProcessConclusion'>
                <h3>WHAT'S REALLY IMPORTANT... FOR THE USER</h3>
                <p>
                Coming from the primary research as well as with the help of personas, I identified the preliminary set of requirements that could drive for a viable solution.
                These are some observation from interview with some sample space of people.
                </p>
                <ul>
                  <li>People need a brand they can trust that will always have their backs when they <br/> are in any financial problems.</li>
                  <li>People want to do day to day transaction with alot more ease and quickly.</li>
                  <li>People shy away from complicated task, as this makes them feel less smart, but will <br/> engage more with digital product that is intuitive and easy to use.</li>
                </ul>
              </div>
            </div>

            <div id='userflow' className='sectionHolder mobilePadder stepHolder stepThreeProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 3 of design process</span>
                <h1>{ aellaData[4].title }</h1>
                <div className='stepThreeProcessFlow'>
                  <p> {aellaData[4].para } </p> 
                  <img src={aellaData[4].image } alt="img"/>
                </div>
              </div>
            </div>
            
            <div id='thinking' className='sectionHolder mobilePadder stepHolder stepFourProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 4 of design process</span>
                <h1>{ aellaData[5].title }</h1>
                <div className='stepFourProcessFlow'>
                  <h3>Grabbing pen and paper</h3>
                  <p> {aellaData[5].para } </p> 
                  <img src={aellaData[5].image } alt="img"/>
                </div>
              </div>
            </div>

            <div id='wireframe' className='sectionHolder mobilePadder stepHolder stepFiveProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 5 of design process</span>
                <h1>{ aellaData[6].title }</h1>
                <div className='stepFiveProcessFlow'>
                  <p> {aellaData[6].para } </p> 
                  <img src={aellaData[6].image } alt="img"/>
                </div>
              </div>
            </div>

            <div id='designsystem' className='sectionHolder mobilePadder stepHolder stepSixProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 6 of design process</span>
                <h1>{ aellaData[7].title }</h1>
                <div className='stepFiveProcessFlow'>
                  <p> {aellaData[7].para } </p> 
                  <i>These are just selected components among many for protfolio purposes.</i>
                  <img src={aellaData[7].image } alt="img"/>
                </div>
              </div>
            </div>

            <div id='hifi' className='sectionHolder mobilePadder stepHolder stepSevenProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 7 of design process</span>
                <h1>{ aellaData[8].title }</h1>
                <div className='stepSevenProcessFlow'>
                  <p> {aellaData[8].para } </p> 
                  <img src={aellaData[8].image } alt="img"/>
                </div>
              </div>
            </div>
            
            <div id='prototype' className='sectionHolder mobilePadder stepHolder stepEightProcess'>
              <div className='sectionHolderDescription'>
                <span className='step'>Step 8 of design process</span>
                <h1>{ aellaData[9].title }</h1>
                <div className='stepSevenProcessFlow'>
                  <p> {aellaData[9].para } </p>
                  <div className='videoHolder'>
                    <video loop="true" autoplay="autoplay" muted>
                      <source src="https://res.cloudinary.com/dramages/video/upload/v1601510965/portfolioImages/portfolioOnAella/onboardingTour.mp4" type="video/mp4" />
                      <span>Can I add text here</span>
                    </video>
                    <video loop="true" autoplay="autoplay" muted>
                      <source src="https://res.cloudinary.com/dramages/video/upload/v1601510818/portfolioImages/portfolioOnAella/billPaymentAella.mp4" type="video/mp4" />
                    </video>
                  </div>
                  
                </div>
              </div>
            </div>

            <div id='visuals' className='sectionHolder mobilePadder stepHolder visualLanguage'>
              <div className='sectionHolderDescription'>
                <h1>{ aellaData[10].title }</h1>
                <p> {aellaData[10].para1 } </p>
                <div className='visualLanguageFlow'> 
                   <h3>Iconography</h3>
                   <p> {aellaData[10].para2 } </p>
                  <img src={aellaData[10].image1 } alt="img"/>
                </div>
                <div className='visualLanguageFlow'> 
                   <h3>Illustration style</h3>
                   <p> {aellaData[10].para3 } </p>
                  <img src={aellaData[10].image2 } alt="img"/>
                </div>
                <div className='visualLanguageFlow'> 
                   <h3>Color pallete</h3>
                  <img src={aellaData[10].image3 } alt="img"/>
                </div>
              </div>
            </div>

            < NextProject
              type = {projectType}
              projectName = {projectTitle}
              description = {projectDescription}
              link = {projectLink}
            />
           
          </div>

        <div className='project01StickyNav'>
          <div className='project01Button'>
            <Link to='#'> Brief </Link>
            <Link to='#solution'> Approach to solution </Link>
            <Link to='#personas'> Personas </Link>
            <Link to='#userflow'> User Flow </Link>
            <Link to='#thinking'> Design Thinking </Link>
            <Link to='#wireframe'> Wire Frame </Link>
            <Link to='#designsystem'> Design System </Link>
            <Link to='#hifi'> High Fidelity Mockup </Link>
            <Link to='#prototype'> Prototype </Link>
            <Link to='#visuals'> Visual Language </Link>
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
