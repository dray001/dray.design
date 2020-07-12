import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Heading from "../components/heading-component/heading"
// import Image from "../components/image"
import SEO from "../components/seo"
import './index.scss'
import { Button } from "../components/button-component/button";

const IndexPage = () => {

  // const [state, setstate] = useState(initialState)

  useEffect(() => {
    const text = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].intersectionRatio > 0) {
        console.log('in the view');
      } else {
        console.log('out of view');
      }
    });
    
    observer.observe(text[1]);
}, []);
  
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <section>
        <div className='introContent'>
            <div className='textWrapper' >
                <Heading title = {`I'm Dare Oni`} />
              
              <p className='textp1'>Product Designer | Illustrator | Amateur Artist </p>
              <p className='textp2' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Velit sed orci et purus amet. Ullamcorper in lectus 
              suspendisse non, et in quam phasellus.
              </p>
            </div>

            <div className='buttonWrapper'>
              <p>Bet you will enjoy going through my work</p>
              <div className='buttonHolder'>
                <Button link='/' text='Projects' />
                <Button link='/' text='Blog and Tutorials' />
                <Button link='/' text='Illustrations' />
                <Button link='/' text='Design case studies' />
              </div>
            </div>
          
        </div>

        <img src="https://images.unsplash.com/photo-1543185377-b75671ac8741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="someImg"/>
      </section>

        <section>
        <div className='introContent'>
            <div className='textWrapper' >
                <Heading title = {`I'm Dare Oni`} />
              
              <p className='textp1'>Product Designer | Illustrator | Amateur Artist </p>
              <p className='textp2' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Velit sed orci et purus amet. Ullamcorper in lectus 
              suspendisse non, et in quam phasellus.
              </p>
            </div>

            <div className='buttonWrapper'>
              <p>Bet you will enjoy going through my work</p>
              <div className='buttonHolder'>
                <Button link='/' text='Projects' />
                <Button link='/' text='Blog and Tutorials' />
                <Button link='/' text='Illustrations' />
                <Button link='/' text='Design case studies' />
              </div>
            </div>
          
        </div>

        <img src="https://images.unsplash.com/photo-1543185377-b75671ac8741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="someImg"/>
      </section>
      </div>
      
      {/* <div>
        <h1 onClick={changeName}>Hi { name }</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div> */}

      
    </Layout>
  )
}
  


export default IndexPage
