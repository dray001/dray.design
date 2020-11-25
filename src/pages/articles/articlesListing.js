import React from "react"
import Heading from "../../components/heading-component/heading"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Button } from "../../components/button-component/button";
import './articlesListing.scss';

// links to articles

let understandingDesign = 'https://medium.com/@dareony/understanding-design-517333a719'
let illustratingWithFigma = 'https://medium.com/figma-africa/making-illustrations-with-figma-2fb23749907'

const SecondPage = () => {

  let Card = ({title, description, link, image}) => (
    <div className='articleComponent' >

      <div className='articleContentArea'>

        <div style={{ backgroundImage: `url(${image})` }} className='imageHolder' />

        <h1>{title}</h1>

        <p> {description} </p>
        
        <Button link={link} text='See what you can learn' />
        
      </div>

    </div>

  )

  
  return (
  <Layout>
    <SEO title="Page two" />
    <div className='articlesWapper' >
      <Heading title={`Articles`} />

      <div className='componentWrapper'>
          <Card 
            title = 'Illustrating with Figma'
            image = 'https://res.cloudinary.com/dramages/image/upload/v1605564427/portfolioImages/Articles/illustrationWithFigma.png'
            link = {illustratingWithFigma}
            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non, et in quam phasellus.'
          />
         
          <Card 
          title = 'Understanding Design'
          image = 'https://res.cloudinary.com/dramages/image/upload/v1605564624/portfolioImages/Articles/understandingDesign.png'
          link = {understandingDesign}
          description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non, et in quam phasellus.'
          />
      
      </div> 

    </div>
    
  </Layout>
  )
}


export default SecondPage
