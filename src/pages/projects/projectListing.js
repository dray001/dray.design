import React from "react"
import Heading from "../../components/heading-component/heading"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Button } from "../../components/button-component/button";
import './projectListing.scss';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className='projectListingWapper' >

      <Heading title={`Projects`} />

      <div className='projects'>
        {/* project comp can display video or Images depending 
          on the data passed to the mediaUrl, also mediaType
          most be provided.*/}

        <Project 
        title = 'Aella Finance App'
        mediaUrl = 'https://res.cloudinary.com/dramages/image/upload/v1609808981/portfolioImages/portfolioOnAella/bannerAellaCover.png'
        mediaType = 'image'
        color = '#2054D2'
        link = '/projects/aellaFinanceApp/aellaFinDesignProcess'
        description = 'Aella makes it super easy for anyone to borrow, invest and make payments. No excuses...'
        />

        <Project 
        title = 'Konga Online Shopping'
        mediaUrl = 'https://res.cloudinary.com/dramages/image/upload/v1600708297/portfolioImages/projectListing/kongabannerPink.png'
        mediaType = 'image'
        link = '/projects/konga/kongaDesignProcess'
        description = {`Konga is one of Nigeria's largest online mall. offering products that span various categories...`}
        />

      </div>

    </div>
    
  </Layout>
  )

let Project = ({title, description, link, mediaUrl, color, mediaType}) => (
  <div className='projectListComponent' >

    <div className='imageHolder' style={{backgroundColor: `${color}`}}>

      {
        mediaType === 'image' ? <img src={mediaUrl} alt="Aella"/> :
        <video loop="true" autoplay="autoplay" muted>
          <source src={mediaUrl} type="video/mp4" />
        </video>
      }

    </div>

    <div className='projectListContentArea'>
      <h1>{title}</h1>
      <p> {description} </p>
      <Button link={link} text='Read Case Study' />
    </div>

  </div>
)


export default SecondPage
