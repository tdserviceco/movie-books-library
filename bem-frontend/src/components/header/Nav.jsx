import React, { useState } from 'react';
import { Header } from '.'
import { useNavigate } from 'react-router-dom';
const Nav = ({ loading }) => {
  const [activateForm, setActivateForm] = useState(false);
  const history = useNavigate();
  const toggle = (e) => {
    setActivateForm(e)
  }
  const reDirect = (e) => {
    history(e.target.value)
  }
  return (
    <nav className={`navigation ${!loading ? 'loaded' : ''}`}>
      <form className={`${activateForm ? 'active' : ''}`}>
        <select onChange={reDirect} defaultValue={''}>
          <option value='' hidden>Choose page</option>
          <option value='/movies'>Movies</option>
          <option value='/books'>Books</option>
          <option value='/all'>All</option>
        </select>
      </form>
      <Header toggle={toggle} />
    </nav>
  );
};

export default Nav;