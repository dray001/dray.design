import React from "react";
import './heading.scss'

const Heading = ({title, size}) => {

    return (
        <h1 style={{fontSize: `${size}`}} className= 'titleHeading' >
           {title}
        </h1>
    );
}

export default Heading

