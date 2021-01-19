import React from "react"
import './nextProjectBrief.scss'
import { Button } from "../button-component/button"

const NextProject =({projectName, type, description, link}) => {

    return (
      <section className='nextProjectWrapper'>
        <div className='nextProjectContentHolder'>
          <span>See Next Project</span>
          <div className='nextProjectContent'>
            <div className='heading'> 
            <h3>{projectName}</h3> <span>{type}</span> 
            <p>{description || 'No project description'}</p>
            </div>
            <Button link={link} text='Read case study' />
          </div>
        </div>
      </section>
    )
}

export default NextProject