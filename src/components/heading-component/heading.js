import React from "react"
import './heading.scss'

const Heading = ({title, size}) => {

    return (
        <div className='titleHolder'>
            <h1 style={{fontSize: `${size}`}} className= 'sectionTitle' >
                {title}
            </h1>
        </div>
    );
}

export default Heading

