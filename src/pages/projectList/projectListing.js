import React from "react"
import { Link } from "gatsby"
import Heading from "../../components/heading-component/heading"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Button } from "../../components/button-component/button";
import './projectListing.scss';
const SecondPage = () => {

  let Sec = ({title, description, link, image}) => (
    <div className='projectListComponent' >

      <div className='projectListContentArea'>
        <h1>{title}</h1>
        <p> {description} </p>
        <div className='buttonHolder'>
          <Button link={link} text='Read Case Study' />
        </div>
      </div>

      <div className='imageHolder' >
        {/* image here */}
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
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non, et in quam phasellus.'
      />

      <Sec 
      title = 'Aella branding'
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non, et in quam phasellus.'
      />

      <Sec 
      title = 'Konga Online Shopping'
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non, et in quam phasellus.'
      />

      <Link to="/"> Go back to the homepage </Link>
    </div>
    
  </Layout>
  )
}

export default SecondPage
