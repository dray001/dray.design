import React, {useEffect, useRef} from "react"
import Layout from "../components/layout"
import Heading from "../components/heading-component/heading"
import SEO from "../components/seo"
import './index.scss'
import DocThumbnail from "../components/docThumbnail-component/docThumbnail"
import {homePageData} from '../data/homePageData'
import myImage from '../images/profilePix.png'

let twinkles = <svg className='twinkle' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0L22.0729 13.9271L36 18L22.0729 22.0729L18 36L13.9271 22.0729L0 18L13.9271 13.9271L18 0Z" fill="#FFD07A"/>
</svg>


const IndexPage = () => {
  let wrapper = useRef(null);
  // let sections = document.getElementsByTagName('SECTION');

  // taggetting contents in first section
  let sec1imgMask = useRef(null);
  let sec1Para1 = useRef(null);
  let sec1Para2 = useRef(null);


  useEffect(()=> {
    wrapper.style.visibility = 'visible';
    sectionOneAnimIn();
  });

  let sectionOneAnimIn =()=> {
    sec1imgMask.classList.add("review");
    sec1Para1.classList.add("review");
    sec1Para2.classList.add("review");
  }

  return (
    <Layout>

      <SEO title="Home" />

      <div className='secWrapper' ref={el => wrapper = el} >
        <section id='intro' className='intro'>
          <div className='introContent'>

            <div className="profileHolder">
                {twinkles}
                {twinkles}
              <div className="imgMask" ref={el => sec1imgMask = el}>
                <img src={myImage} alt="profilePix" />
              </div>
            </div>
          
            <div className='textp1' ref={el => sec1Para1 = el} >
              <h1>Hi, I'm Dray, a Digital Designer passionate about creating digital solutions and experiences </h1>
            </div>
            
            
            <div className='textp2' ref={el => sec1Para2 = el} > 
              <p>
                Currently based in Lagos Nigeria, with experience in building products that meet both user's and business needs, also experienced in architecting and scaling design systems across organizations.
              </p>
            </div>

            <a href="/#portfolioFolder">
              <svg className='arrowDown' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.75 16.25L20.368 27.868L32.2961 15.9399" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>

          </div>
        </section>

        <section id='portfolioFolder'>

          <div>
            <h1>{homePageData.homeData[1].title}</h1>
            <div className="thumbnailWrapper">
                {
                  homePageData.homeData[1].docThumbnailProjects.map(
                    (n)=> 
                            <DocThumbnail
                              title = {n.title}
                              newTab = {n.newTab}
                              img = {n.imgUrl}
                              live = {n.live}
                              tags = {n.tags}
                              link= {n.link}
                              description = {n.description}
                            />
                  )
                }
            </div>
          </div>

          <div>
            <h1>{'Articles 🖋'}</h1>

            <div className="thumbnailWrapper">
                {
                  homePageData.homeData[1].docThumbnailArticles.map(
                    (n)=> 
                        <DocThumbnail
                          title = {n.title}
                          newTab = {n.newTab}
                          img = {n.imgUrl}
                          live = {n.live}
                          tags = {n.tags}
                          link= {n.link}
                          description = {n.description}
                        />
                  )
                }
            </div>
          </div>

        </section>

        <section className='aboutMe' id='AboutMe' >

          <div className='aboutMeContentHolder'>

            <div className='introContent'>
              <Heading title={homePageData.homeData[2].title} />
              <div className='textWrapper' >
                <div className='textp2' dangerouslySetInnerHTML={{ __html: homePageData.homeData[2].para}} />
              </div>
            </div>

            <div className='ImgHolder'>
                <div className='aboutMeChart'>
                  <span>
                    <svg width="115" height="56" viewBox="0 0 115 56"           fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.78308 2.11646L10.7376 9.91358C13.5922 12.3993 17.8427 12.3993 20.6973 9.91358L24.672 6.45267C27.5266 3.96699 31.7771 3.96699 34.6317 6.45267L38.6063 9.91358C41.461 12.3993 45.7114 12.3993 48.5661 9.91358L52.5407 6.45267C55.3954 3.96699 59.6458 3.96699 62.5005 6.45267L66.4751 9.91358C69.3298 12.3993 73.5802 12.3993 76.4349 9.91358L80.4095 6.45267C83.2641 3.96699 87.5146 3.96699 90.3692 6.45267L94.3439 9.91358C97.1985 12.3993 101.449 12.3993 104.304 9.91358L113.258 2.11646M1.78308 23.3498L10.7376 31.1469C13.5922 33.6326 17.8427 33.6326 20.6973 31.1469L24.672 27.686C27.5266 25.2003 31.7771 25.2003 34.6317 27.686L38.6063 31.1469C41.461 33.6326 45.7114 33.6326 48.5661 31.1469L52.5407 27.686C55.3954 25.2003 59.6458 25.2003 62.5005 27.686L66.4751 31.1469C69.3298 33.6326 73.5802 33.6326 76.4349 31.1469L80.4095 27.686C83.2641 25.2003 87.5146 25.2003 90.3692 27.686L94.3439 31.1469C97.1985 33.6326 101.449 33.6326 104.304 31.1469L113.258 23.3498M1.78308 44.5831L10.7376 52.3803C13.5922 54.8659 17.8427 54.8659 20.6973 52.3803L24.672 48.9194C27.5266 46.4337 31.7771 46.4337 34.6317 48.9194L38.6063 52.3803C41.461 54.8659 45.7114 54.8659 48.5661 52.3803L52.5407 48.9194C55.3954 46.4337 59.6458 46.4337 62.5005 48.9194L66.4751 52.3803C69.3298 54.8659 73.5802 54.8659 76.4349 52.3803L80.4095 48.9194C83.2641 46.4337 87.5146 46.4337 90.3692 48.9194L94.3439 52.3803C97.1985 54.8659 101.449 54.8659 104.304 52.3803L113.258 44.5831" stroke="black" stroke-width="3"/>
                    </svg>
                  </span>
                  
                  <span>
                    <svg width="76" height="63" viewBox="0 0 76 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M74.3229 19.1172C74.3229 39.2049 38.0999 61.0001 38.0999 61.0001C38.0999 61.0001 1.87695 39.2049 1.87695 19.1172C1.87695 -0.97057 32.4791 -6.44946 38.0999 16.7659C44.3453 -6.44975 74.3229 -0.97057 74.3229 19.1172Z" stroke="black" stroke-width="3"/>
                    </svg>
                  </span>
                  
                  <span>
                    <svg width="74" height="59" viewBox="0 0 74 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M37.1075 7.02577L52.1167 37.5992L50.3708 38.6313C45.435 41.549 43.7893 44.898 43.0391 50.5824H30.4747C29.9474 44.9142 28.4565 41.5007 23.6045 38.5233L22.0984 37.5992L37.1075 7.02577ZM37.1075 7.02577V25.4543M37.1075 25.4543C35.2886 25.4906 33.8252 26.9764 33.8252 28.8041C33.8252 30.6545 35.3253 32.1546 37.1757 32.1546C39.0262 32.1546 40.5263 30.6545 40.5263 28.8041C40.5263 26.9537 39.0262 25.4536 37.1757 25.4536C37.153 25.4536 37.1302 25.4538 37.1075 25.4543ZM65.6551 5.35051V8.70102H72.3561V2H65.6551V5.35051ZM65.6551 5.35051H8.69639M8.69639 5.35051V2H1.99536V8.70102H8.69639V5.35051ZM27.1242 50.5824H47.2273V57.2834H27.1242V50.5824Z" stroke="black" stroke-width="3"/>
                    </svg>
                  </span>
                  
                  <span>
                    <svg width="96" height="73" viewBox="0 0 96 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48.4433 0.683105L51.4597 16.2138C52.3945 21.0272 56.1583 24.7909 60.9717 25.7258L76.5023 28.7422L60.9717 31.7586C56.1583 32.6934 52.3945 36.4572 51.4597 41.2706L48.4433 56.8012L45.4269 41.2706C44.492 36.4572 40.7283 32.6934 35.9149 31.7586L20.3842 28.7422L35.9149 25.7258C40.7283 24.7909 44.492 21.0272 45.4269 16.2138L48.4433 0.683105Z" stroke="black" stroke-width="3"/>
                      <path d="M79.4252 40.4335L81.1219 49.1695C81.6477 51.877 83.7648 53.9941 86.4724 54.52L95.2084 56.2167L86.4724 57.9134C83.7648 58.4393 81.6477 60.5564 81.1219 63.2639L79.4252 71.9999L77.7284 63.2639C77.2026 60.5564 75.0855 58.4393 72.3779 57.9134L63.6419 56.2167L72.3779 54.52C75.0855 53.9941 77.2026 51.877 77.7284 49.1695L79.4252 40.4335Z" stroke="black" stroke-width="3"/>
                      <path d="M16.2923 38.0952L17.989 46.8312C18.5148 49.5387 20.6319 51.6558 23.3395 52.1817L32.0755 53.8784L23.3395 55.5751C20.6319 56.101 18.5148 58.2181 17.989 60.9256L16.2923 69.6616L14.5955 60.9256C14.0697 58.2181 11.9526 56.101 9.24504 55.5751L0.509033 53.8784L9.24504 52.1817C11.9526 51.6558 14.0697 49.5387 14.5955 46.8312L16.2923 38.0952Z" stroke="black" stroke-width="3"/>
                    </svg>
                  </span>
                </div>
            </div>

          </div>

        </section>
        
        <section id='Skillset' className='mySkills'>

            <div className='skillHolder'>

              <div className='introContent'>
                <Heading title={homePageData.homeData[3].title} />
                <div className='textWrapper' >
                    <div dangerouslySetInnerHTML={{ __html: homePageData.homeData[3].para}} />
                    <p className='highlited'> My Design Tool Box contains: </p>
                    <div className='tools' >
                        <p><span>Figma</span></p>
                        <p><span>Protopie</span></p>
                        <p><span>Photoshop</span></p>
                        <p><span>Adobe Illustrator</span></p>
                        <p><span>After Effects</span></p>
                        <p><span>Autodesk SketchBook</span></p>
                        <p><span>Procreate</span></p>
                    </div>
                </div>
              </div>
              
              <div className='skillset'>
                <Smile skill='UX Design' op4='1'/>
                <Smile skill='UI Design' op4='1'/>
                <Smile skill='Interaction Design' op4='1'/>
                <Smile skill='Motion Design' op3='1'/>
                <Smile skill='Frontend Dev.' op3='1'/>
              </div>
            </div>
            
          </section>
        
      </div>

    </Layout>
  )
}

export default IndexPage

let Smile = ({skill, op1, op2, op3, op4}) => (
  <div className='skilly'>
    <span> {skill || 'non'} </span>
    <div>
      <svg width="296" height="56" viewBox="0 0 296 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="smiles">
        <g id="smiley1" opacity={op1 || 0.2}>
        <circle id="Ellipse 1" cx="28" cy="28" r="27" stroke="black" stroke-width="2"/>
        <path id="Ellipse 4" d="M42.6043 35.6103C38.1678 32.8982 33.0637 31.475 27.864 31.5003C22.6642 31.5256 17.5742 32.9983 13.1643 35.7534" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <circle className='circleFill' id="Ellipse 2" cx="17.5" cy="21" r="3.5" fill="black"/>
        <circle className='circleFill' id="Ellipse 3" cx="38.5" cy="21" r="3.5" fill="black"/>
        </g>
    
        <g id="smiley2" opacity={op2 || 0.2}>
        <circle id="Ellipse 1_2" cx="108" cy="28" r="27" stroke="black" stroke-width="2"/>
        <path id="Ellipse 4_2" d="M122.604 35.6103L93.1643 35.7534" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <circle className='circleFill' id="Ellipse 2_2" cx="97.5" cy="21" r="3.5" fill="black"/>
        <circle className='circleFill' id="Ellipse 3_2" cx="118.5" cy="21" r="3.5" fill="black"/>
        </g>
    
        <g id="smiley3" opacity={op3 || 0.2}>
        <circle id="Ellipse 1_3" cx="188" cy="28" r="27" stroke="black" stroke-width="2"/>
        <path id="Ellipse 4_3" d="M202.604 31.643C198.168 34.3552 193.064 35.7783 187.864 35.753C182.664 35.7278 177.574 34.2551 173.164 31.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <circle className='circleFill' id="Ellipse 2_3" cx="177.5" cy="21" r="3.5" fill="black"/>
        <circle className='circleFill' id="Ellipse 3_3" cx="198.5" cy="21" r="3.5" fill="black"/>
        </g>
    
        <g id="smiley4" opacity={op4 || 0.2}>
        <circle id="Ellipse 1_4" cx="268" cy="28" r="27" stroke="black" stroke-width="2"/>
        <g id="Ellipse 4_4">
        <mask id="path-14-inside-1" fill="white">
        <path d="M254 31.5C254 35.213 255.475 38.774 258.101 41.3995C260.726 44.025 264.287 45.5 268 45.5C271.713 45.5 275.274 44.025 277.899 41.3995C280.525 38.774 282 35.213 282 31.5L268 31.5H254Z"/>
        </mask>
        <path className='circleFill' d="M254 31.5C254 35.213 255.475 38.774 258.101 41.3995C260.726 44.025 264.287 45.5 268 45.5C271.713 45.5 275.274 44.025 277.899 41.3995C280.525 38.774 282 35.213 282 31.5L268 31.5H254Z" fill="black" stroke-width="4" mask="url(#path-14-inside-1)"/>
        </g>
        <path id="Rectangle 2942" d="M262.45 21L257.5 16.0502L252.55 21" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <path id="Rectangle 2943" d="M281.399 21L276.45 16.0502L271.5 21" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </g>
        </g>
    </svg>
    </div>
    
  </div>
);
