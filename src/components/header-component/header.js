import { Link } from "gatsby"
import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import "./header.scss"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = ({siteTitle}) => {

   const [openState, setOpenstate] = useState(false);

   useEffect(()=> {
      setOpenstate(false);
   },[])

   const toggleMenu =()=> {
     setOpenstate(!openState);
     let cw = document.querySelector('.childrenWrapper');

     if(openState === false) {
       cw.classList.add('modalOn');
     }

     else {
      cw.classList.remove('modalOn');
     }
   }

   const closeMenu =()=> {
    setOpenstate(false);
   }
   
  return (
    <header>
      <div onClick={toggleMenu} className={openState ? 'hambugerModal' : 'hambugerModal off' }></div>

      <div className="headerContainer">

        <Link onClick={closeMenu} to = '/'>
          <svg className="logo" width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.3449 15.5378C44.3608 16.1002 41.9709 16.9155 41.4086 16.2407C40.7057 15.3972 41.5492 13.9914 36.9099 15.5378C32.2706 17.0843 29.2091 18.4901 27.4908 12.8667C25.9444 7.80571 22.992 15.2566 13.0106 18.6307C2.64478 22.1346 -2.45356 16.5082 3.59148 10.758C9.35538 5.27517 38.878 7.24336 33.3952 19.3336C31.5676 22.567 29.0371 20.3177 27.9124 18.0683C26.7878 15.8189 27.2095 21.3018 25.8037 20.7394C24.3978 20.1771 24.2573 16.2407 22.992 15.5378C21.7268 14.8349 21.0238 20.7394 19.3368 20.3177C17.9872 19.9803 19.618 16.5219 20.6021 14.8349M6.40314 3.16643C7.94956 1.47947 16.3846 -3.441 17.931 11.1798C18.2122 20.1771 13.9946 23.9728 10.7612 23.9728C6.21687 23.9728 3.1697 6.82163 9.63655 4.99405M47.5942 15.9596H49" stroke="black" stroke-linecap="round"/>
          </svg>
        </Link>

        <div className={openState ? 'navHolder' : 'navHolder off' }>

          <div className="headerLink">
            <Link onClick={toggleMenu} to ='/projects/projectListing' > Projects </Link>
            <Link onClick={toggleMenu} to = '/articles/articlesListing' > Articles </Link>
            <Link onClick={toggleMenu} to = '/illustrationAndArt/illustrationAndArt' > Sketches and Illustrations </Link>
            <Link onClick={toggleMenu} to = '/#AboutMe' > About Me </Link>
          </div>

          <div className="leaveAmessageButton">
            <a href="mailto:dareony@gmail.com">
            <span>Hire Me</span> 
            </a>    
          </div>
      
        </div>
        
        <div className='iconHolder'>
  
            <span className='darkLightSwitcher'>
                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                    <label  className='switch'>
                      <input
                        type="checkbox"
                        onChange={e => {
                          toggleTheme(e.target.checked ? 'dark' : 'light')
                        }}
                        checked={theme === 'dark'}
                      />
                      <span className='sunnyMoon' />
                    </label>
                  )}
                </ThemeToggler>
            </span>

            <div onClick={toggleMenu} className= 'hambugerHolder'>
              <div className={openState ? 'hambuger open' : 'hambuger' }>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="leaveAmessageButtonDesktop">
              <a href="mailto:dareony@gmail.com">
              <span>Hire Me</span> 
              </a>    
            </div>

        </div>
      
    
    </div>
  </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
