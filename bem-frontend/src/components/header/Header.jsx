import React, { useState } from 'react';
import { Icon } from '@iconify/react';
const Header = ({ toggle }) => {
  const [toggleClick, setToggleClick] = useState(false);
  const toggleFunction = () => {
    setToggleClick(!toggleClick);
    toggle(!toggleClick)
  }
  return (
    <header>
      {console.log()}
      <button className={`menu-button ${toggleClick ? 'active' : ''}`} type="button" onClick={toggleFunction}>
        {toggleClick &&
          <Icon icon="fe:app-menu" color="rgba(0, 0, 0, 0.5019607843137255)" />
        }
        {!toggleClick &&
          <Icon icon="fe:app-menu" color="black" />
        }
      </button>
    </header>
  );
};

export default Header;