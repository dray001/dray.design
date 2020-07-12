import React from "react"
import { Link } from "gatsby"
import './button.scss'

export const Button = ({link, text}) => {
    return (
        <Link className='linky' to={link}> {text} </Link>
    )
}