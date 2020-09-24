import React, { useEffect } from "react"
import Layout from "../components/layout"
import Heading from "../components/heading-component/heading"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import './index.scss'
import { Button } from "../components/button-component/button";
import {homePageData} from '../data/homePageData'

const IndexPage = ({data}) => {

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

  useEffect(() => {
    const text = document.querySelectorAll('section');
    const Img = document.querySelector('.Img');

    const options1 = {
      root: null,
      threshold: 0,
      rootMargin: "0px"

    };

    const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

        console.log(observer)

        if (entry.isIntersecting) {
            console.log('in the view');
            Img.classList.add('nonFixed');
        }
        else {
          console.log('out of view');
          Img.classList.remove('nonFixed');
        }
      });
    }, options1)

    observer1.observe(text[2]);

  },[]);

  return (
    <Layout>

      <SEO title="Home" />

      <div className='secWrapper'>
        <section >
          <div className='introContent'>
            <div className='textWrapper' >
            <div className='title'>
              <Heading title={homePageData.homeData[0].title} />
            </div>
              
              <p className='textp1'>Product Designer | Illustrator | Amateur Artist </p>
              <div className='textp2' dangerouslySetInnerHTML={{ __html: homePageData.homeData[0].para}} />
            </div>

            <div className='buttonWrapper'>
              <p>See what I have been up to:</p>
              <div className='buttonHolder'>
                <div className='b1'> <Button link='/projects/projectListing' text='My Projects' /> </div>
                <div className='b2'> <Button link='https://medium.com/@dareony' text='My Articles' /> </div>
                <div className='b3'> <Button link='/IllustrationAndArt/IllustrationAndArt' text='Illustrations and Sketches' /> </div>
              </div>
            </div>

          </div>
        </section>

        <section id='AboutMe'>
          <div className='introContent'>
            <div className='textWrapper' >

              <Heading title={homePageData.homeData[1].title} />

              <div className='textp2' dangerouslySetInnerHTML={{ __html: homePageData.homeData[1].para}} />

            </div>

            
            <Button buttonWidth={true} link='/projects/projectListing' text='See my work' />

          </div>

          <div className='Img'>
            <div className='ImgWrapper'>
                <div><img src={data.allCloudinaryMedia.edges[0].node.secure_url} alt="someImg" /></div>
                {/* data.allCloudinaryMedia.edges[0].node.secure_url */}
                <div><img src={data.allCloudinaryMedia.edges[1].node.secure_url} alt="someImg" /></div>
            </div>
          </div>

        </section>

        <section id='mySkills'>
          <Heading title={homePageData.homeData[2].title} />
          
          <div className='skillHolder'>
            
            <div className='skillset'>
             <Smile skill='UX Design' op3='1'/>
             <Smile skill='UI Design' op4='1'/>
             <Smile skill='Visual Design' op4='1'/>
             <Smile skill='Interaction Design' op4='1'/>
             <Smile skill='Frontend Development' op2='1'/>
           </div>

           <div className='introContent'>
              <div className='textWrapper' >
                <div className='text' dangerouslySetInnerHTML={{ __html: homePageData.homeData[2].para}} />
              </div>
            </div>

          </div>
          
        </section>
      </div>

    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allCloudinaryMedia(filter: {tags: {eq: "home"}}) {
    edges {
      node {
        secure_url
      }
    }
  }
}
`

{/* <div>
        <h1 onClick={changeName}>Hi { name }</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div> */}



export default IndexPage
