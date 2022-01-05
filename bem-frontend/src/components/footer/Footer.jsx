import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className='footer__container'>
        <h5 className='footer_container-copyright'>The Library&copy; inc  - {date.getFullYear()}</h5>
      </div>
    </footer>
  );
};

export default Footer;