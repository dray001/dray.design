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
      <div className={openState ? 'hambugerModal' : 'hambugerModal off' }></div>
    <div className="headerContainer">
    <Link onClick={closeMenu} to = '/'>
      <svg className="logo" width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45.3449 15.5378C44.3608 16.1002 41.9709 16.9155 41.4086 16.2407C40.7057 15.3972 41.5492 13.9914 36.9099 15.5378C32.2706 17.0843 29.2091 18.4901 27.4908 12.8667C25.9444 7.80571 22.992 15.2566 13.0106 18.6307C2.64478 22.1346 -2.45356 16.5082 3.59148 10.758C9.35538 5.27517 38.878 7.24336 33.3952 19.3336C31.5676 22.567 29.0371 20.3177 27.9124 18.0683C26.7878 15.8189 27.2095 21.3018 25.8037 20.7394C24.3978 20.1771 24.2573 16.2407 22.992 15.5378C21.7268 14.8349 21.0238 20.7394 19.3368 20.3177C17.9872 19.9803 19.618 16.5219 20.6021 14.8349M6.40314 3.16643C7.94956 1.47947 16.3846 -3.441 17.931 11.1798C18.2122 20.1771 13.9946 23.9728 10.7612 23.9728C6.21687 23.9728 3.1697 6.82163 9.63655 4.99405M47.5942 15.9596H49" stroke="black" stroke-linecap="round"/>
      </svg>
    </Link>
      <div className={openState ? 'navHolder' : 'navHolder off' }>

        <div className="headerLink">
          <Link onClick={toggleMenu} to = '/#AboutMe' > About Me </Link>
          <Link onClick={toggleMenu} to = '/#mySkills' > My Skills </Link>
          <Link onClick={toggleMenu} href='/projects/projectListing' > My Projects </Link>
        </div>

        <div className="leaveAmessageButton">
          <Link to="/">
          <span>Say Hi!</span> 
          <span>
            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5885 0H2.41147C1.08187 0 0 1.08187 0 2.41147V16.0488C0 17.3784 1.08187 18.4603 2.41147 18.4603H21.5885C22.9181 18.4603 24 17.3784 24 16.0488V2.41147C24 1.08187 22.9181 0 21.5885 0ZM22.9333 16.0488C22.9333 16.7904 22.3301 17.3936 21.5885 17.3936H2.41147C1.66987 17.3936 1.06667 16.7904 1.06667 16.0488V2.41147C1.06667 1.66987 1.66987 1.06667 2.41147 1.06667H21.5885C22.3301 1.06667 22.9333 1.66987 22.9333 2.41147V16.0488Z" fill="black"/>
              <path d="M20.0115 3.11601L12.4061 9.99067C12.1747 10.2 11.8253 10.2 11.5939 9.99067L3.98853 3.11601C3.77013 2.91867 3.43279 2.93547 3.23519 3.15414C3.03759 3.37281 3.05466 3.70987 3.27333 3.90747L9.36053 9.40987L3.79573 14.804C3.58426 15.0091 3.57893 15.3467 3.78399 15.5581C3.88853 15.6661 4.02773 15.7203 4.16693 15.7203C4.30053 15.7203 4.43439 15.6701 4.53813 15.5699L10.1536 10.1267L10.8787 10.7821C11.1984 11.0709 11.5992 11.2155 12.0003 11.2155C12.4011 11.2155 12.8021 11.0709 13.1219 10.7821L13.8469 10.1267L19.4624 15.5699C19.5661 15.6701 19.7 15.7203 19.8336 15.7203C19.9728 15.7203 20.112 15.6661 20.2165 15.5581C20.4216 15.3467 20.4163 15.0088 20.2048 14.804L14.6395 9.40987L20.7269 3.90747C20.9453 3.70987 20.9624 3.37281 20.7651 3.15414C20.5675 2.93574 20.2301 2.91867 20.0115 3.11601Z" fill="black"/>
            </svg>
          </span>
          </Link>    
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
                    <span className='sunnyMoon'>
                    </span>
                  </label>
                )}
              </ThemeToggler>
          </span>
          <div className= 'hambugerHolder'>
            <div onClick={toggleMenu} className={openState ? 'hambuger open' : 'hambuger' }>
              <span></span>
              <span></span>
              <span></span>
            </div>
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
