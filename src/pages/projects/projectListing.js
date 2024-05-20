import React from "react"
import Heading from "../../components/heading-component/heading"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DocThumbnail from "../../components/docThumbnail-component/docThumbnail"
import {homePageData} from '../../data/homePageData'
import { Button } from "../../components/button-component/button";
import './projectListing.scss';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section className='projectListingWapper' id='portfolioFolder'>

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
    
  </Layout>
  )


export default SecondPage
