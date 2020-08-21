import React from "react"
import { Link } from "gatsby"
import './button.scss'

export const Button = ({link, text, buttonWidth}) => {
    return (
        <div className= {buttonWidth ? 'buttonWapper width' : 'buttonWapper'} >
            <Link className='linky' to={link}> {text} </Link>
        </div>    
    )
}
