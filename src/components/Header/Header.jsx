import React from 'react'
import '../Header/Header.css'
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
<div>
{/* <i class="fa-regular fa-clock white-i"></i> */}
    {/* <FontAwesomeIcon icon="fa-regular fa-clock" /> */}
    <span>Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</span></div>
</div>
<div className="header-top-content-right">
<p className='header-login'>LOGIN</p>

</div>
        </div>


    </div>
<div className="header-content-bottom">

</div>
</div>
    </div>
  )
}

export default Header