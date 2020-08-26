import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import "./header.scss"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = ({ siteTitle}) => {
  return (
    <header>
    <div className="headerContainer">
    
      <div className="headerLink">
        <Link to = '/#dareOni'> Dare Oni </Link>
        <Link to = '/#AboutMe' > About Me </Link>
        <Link href='/#mySkills' > My Skills </Link>
      </div>

      <div className="leaveAmessageButton">
        <Link to="/">
        <span>Leave a Message</span> 
        <span>
          <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5885 0H2.41147C1.08187 0 0 1.08187 0 2.41147V16.0488C0 17.3784 1.08187 18.4603 2.41147 18.4603H21.5885C22.9181 18.4603 24 17.3784 24 16.0488V2.41147C24 1.08187 22.9181 0 21.5885 0ZM22.9333 16.0488C22.9333 16.7904 22.3301 17.3936 21.5885 17.3936H2.41147C1.66987 17.3936 1.06667 16.7904 1.06667 16.0488V2.41147C1.06667 1.66987 1.66987 1.06667 2.41147 1.06667H21.5885C22.3301 1.06667 22.9333 1.66987 22.9333 2.41147V16.0488Z" fill="black"/>
            <path d="M20.0115 3.11601L12.4061 9.99067C12.1747 10.2 11.8253 10.2 11.5939 9.99067L3.98853 3.11601C3.77013 2.91867 3.43279 2.93547 3.23519 3.15414C3.03759 3.37281 3.05466 3.70987 3.27333 3.90747L9.36053 9.40987L3.79573 14.804C3.58426 15.0091 3.57893 15.3467 3.78399 15.5581C3.88853 15.6661 4.02773 15.7203 4.16693 15.7203C4.30053 15.7203 4.43439 15.6701 4.53813 15.5699L10.1536 10.1267L10.8787 10.7821C11.1984 11.0709 11.5992 11.2155 12.0003 11.2155C12.4011 11.2155 12.8021 11.0709 13.1219 10.7821L13.8469 10.1267L19.4624 15.5699C19.5661 15.6701 19.7 15.7203 19.8336 15.7203C19.9728 15.7203 20.112 15.6661 20.2165 15.5581C20.4216 15.3467 20.4163 15.0088 20.2048 14.804L14.6395 9.40987L20.7269 3.90747C20.9453 3.70987 20.9624 3.37281 20.7651 3.15414C20.5675 2.93574 20.2301 2.91867 20.0115 3.11601Z" fill="black"/>
          </svg>
        </span>
        </Link>

        <span>
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
      </div>
      {/* <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1> */}
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
