import React from 'react'
import '../Header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLocationDot,faClock,faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  return (
    <div className='header-all'>
<div className="header-content">
    <div className="w-92">

    </div>
    <div className="header-top-content">
    <div className="w-92">
    <div className="header-top-content-left">
<div >
<FontAwesomeIcon icon={faEnvelope} className='right-10' />

    <span>info@mail.com</span></div>
    <div >
<FontAwesomeIcon icon={faLocationDot} className='right-10' />

    <span>234 Main Road , NY</span></div>
    <div >
<FontAwesomeIcon icon={faClock} className='right-10' />

    <span>Mon- Fry 09 - 18</span></div>
</div>

<div className="header-top-content-right">
<div>
  <span >
  Term and Conditions
  </span>
  <span className='margin-12'>
  TimeTable
  </span>
  <span>
  Services
  </span>
</div>

</div>
        </div>


    </div>
<div className="header-content-bottom">
<div className=' header-bottom-all  width-92'>
  <div className="bottom-left">
    <img className='logo' src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/logo.png" alt="" />
  </div>
  <div className="bottom-center">
    <span>HOME</span>
    <span>ABOUT</span>
    <span>BLOG</span>
    <span>SHOP</span>
    <span>CONTACT</span>


  </div>
  <div className="bottom-right ">
<span className='count-of-basket'>0</span>
  <FontAwesomeIcon icon={faCartShopping} className='basket-icon'/>
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default Header