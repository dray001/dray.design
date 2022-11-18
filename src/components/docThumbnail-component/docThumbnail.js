import React from "react"
import './docThumbnail.scss'

const DocThumbnail = ({title, description, link, linkString, logoUrl, newTab}) => {

  return (
    <a  target={newTab ? "_blank" : ''}  href={link} className='docThumbnailGroup'>
      
        <div className='contentWrapper'>
          <div className="img_titleWrapper">
            <img src={logoUrl} alt="logo" />
            <h6>{title}</h6>
          </div>
          <p>{description}</p>
          <a href={link}>{linkString}</a>
        </div>

    </a>
  )
}

export default DocThumbnail;