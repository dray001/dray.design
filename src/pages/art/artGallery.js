import React, {useEffect, useState} from "react"
import Heading from "../../components/heading-component/heading"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Button } from "../../components/button-component/button";
import './artGallery.scss';
import ProtoArt from "./artWorks/protoArt"


const DigitalGallery = () => {
  
  return (
  <Layout>
    <SEO title="Page two" />
    <section className='artPage' >
      <Heading title={`Art`} />

      <div className="board">
          <ProtoArt />
          <ProtoArt />
          <ProtoArt />
          <ProtoArt />
          <ProtoArt />
          <ProtoArt />
      </div>

    </section>
    
  </Layout>
  )
}


export default DigitalGallery
