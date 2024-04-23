import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo1 from '../../assets/logo1.png'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  /*const [sticky , setsticky]=useState(false);
  useEffect(()=>{
    addEventListener('scroll',()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  },[]);*/
  /*className={`container  ${sticky ? 'dark-nav' : ''}`}*/ 
  const [mobileMenu,setmobileMenu]=useState(false);

  const toggleMenu=()=>{
    mobileMenu?setmobileMenu(false):setmobileMenu(true);
  }
  return (
    <nav  className='container dark-nav'>
        <img src={logo1} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0}  duration={500} >Home</Link></li>
            <li><Link to='program'smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about'smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li> <Link to='campus'smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials'smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link className='btn' to='contact'smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menuicon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
