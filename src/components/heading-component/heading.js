import React from "react";
import './heading.scss'

const Heading = ({title}) => {

    return (
        <h1 className= 'titleHeading' >
           {title}
        </h1>
    );
}

export default Heading

