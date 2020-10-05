import React from "react"
import { Link } from "gatsby"
import Heading from "../../components/heading-component/heading"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from 'gatsby'
import { Button } from "../../components/button-component/button";
import './projectListing.scss';

const SecondPage = () => {

  let Sec = ({title, description, link, image}) => (
    <div className='projectListComponent' >

      <div className='projectListContentArea'>
        <h1>{title}</h1>
        <p> {description} </p>
        
          <Button buttonWidth={true} link={link} text='Read Case Study' />
        
      </div>

      <div className='imageHolder' >
        <img src={image} alt="Aella"/>
      </div>
    </div>
    
  )

  
  return (
  <Layout>
    <SEO title="Page two" />
    <div className='projectListingWapper' >
      <Heading title={`Projects`} />

      <Sec 
      title = 'Aella Finance App'
      image = 'https://res.cloudinary.com/dramages/image/upload/v1600708297/portfolioImages/projectListing/kongabannerPink.png'
      // image = {data.allCloudinaryMedia.edges[0].node.secure_url}
      link = '/projects/aellaFinanceApp/aellaFinDesignProcess'
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non, et in quam phasellus.'
      />


      <Sec 
      title = 'Konga Online Shopping'
      image = 'https://res.cloudinary.com/dramages/image/upload/v1600708297/portfolioImages/projectListing/kongabannerPink.png'
      // image = {data.allCloudinaryMedia.edges[1].node.secure_url}
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non, et in quam phasellus.'
      />

      <Sec 
      title = 'Aella branding'
      // image = {data.allCloudinaryMedia.edges[0].node.secure_url}
      image = 'https://res.cloudinary.com/dramages/image/upload/v1600708297/portfolioImages/projectListing/kongabannerPink.png'
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non, et in quam phasellus.'
      />

      <Link to="/"> Go back to the homepage </Link>
    </div>
    
  </Layout>
  )
}


export default SecondPage
