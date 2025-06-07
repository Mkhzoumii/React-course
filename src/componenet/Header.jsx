import React from 'react';
import image from '../image/logo.svg'; // Adjust the path as necessary
const Header = () => {
  return <div className="pt-3 pl-2" style={{borderBottom: "1px solid #777"}}>
  
  <img src={image} alt="Logo" style={{height:"35px",verticalAlign:"top"}} />
  <span className='h2 pt-4 text-white-50'> React Course - Contact Opeadia</span>
  </div>;
};
export default Header;