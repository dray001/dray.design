import React from "react"
import './docThumbnail.scss'

const DocThumbnail = ({title, description, live, tags, link, img, newTab}) => {

  return (
    <a  target={newTab ? "_blank" : ''}  href={link} className='docThumbnailGroup'>
      
        <div className='contentWrapper'>
          <div className="img_titleWrapper">
            <img src={img} alt="coverImg" />
            { live ? null : <span>coming soon</span>}
          </div>

          <div>
            <h6>{title}</h6>
            <span>{tags}</span>
            <p>{description}</p>

          </div>
          
        </div>

    </a>
  )
}

export default DocThumbnail;