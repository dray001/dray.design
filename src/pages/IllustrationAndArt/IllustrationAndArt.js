import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Heading from "../../components/heading-component/heading"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Button } from "../../components/button-component/button"
import "./IllustrationAndArt.scss"

const ArtPage = () => {

  return (
    <Layout>
      <SEO title="Page two" />
      <div className="imgWapper">
        <div>
          <Heading title={`Illustrations`} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          risus nunc arcu dolor. <br /> Vitae purus facilisis viverra eu feugiat
          auctor a. Donec nunc venenatis,
        </p>

        <div className="imgHolder">
          <ImgComp
            image="https://cdn.dribbble.com/users/2212622/screenshots/5718438/output.gif"
            description="this is just going to be a short description"
          />

          <ImgComp
            image="https://cdn.dribbble.com/users/2212622/screenshots/6329798/figma.png"
            description="ddd"
          />

          <ImgComp
            image="https://images.unsplash.com/photo-1582472069132-0cd3678af233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            description="ddd"
          />

          <ImgComp
            image="https://images.unsplash.com/photo-1582472069132-0cd3678af233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            description="ddd"
          />

          <ImgComp
            image="https://images.unsplash.com/photo-1582472069132-0cd3678af233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            description="ddd"
          />

          <ImgComp
            image="https://images.unsplash.com/photo-1582472069132-0cd3678af233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            description="ddd"
          />
        </div>
      </div>
      <Link to="/"> Go back to the homepage </Link>
    </Layout>
  )

}


const ImgComp = ({ description, image }) => {

  const [state, setstate] = useState(false);

  const showImg = () => {
    setstate(!state);
  }
  
  return (
    <div>
      <div className={state ? "popImage showImg" : "popImage"}>
        <img src={image} alt="img" />
        <div>
          <button onClick={showImg} className="button">close</button>
          <a href="#"> view on figma </a>
        </div>
      </div>
      
      <div className={state ? "close modal" : "close"}></div>
      
      <div
        className="imgComponent"
        onClick={showImg}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="imgDescription">
          <span> {description} </span>
        </div>
      </div>
    </div>
)
}

export default ArtPage
