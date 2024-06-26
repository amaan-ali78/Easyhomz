import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ROUTE_LINKS } from '../../utils/data';
import style from './navbar.module.scss'; // Import your SCSS file

const Navbar = () => {
  const handleClick = () => {
    document.getElementById('sideBar').style.display = 'flex';
  };

  const handleClose = () => {
    document.getElementById('sideBar').style.display = 'none';
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.logo}>
          <img
            src="https://eazyhomz.com/wp-content/uploads/2024/03/logo-1536x1536.png"
            alt="eazyhomz"
          />
          <h1>Eazyhomz</h1>
        </div>
        <div className={style.navItem}>
          {NAV_ROUTE_LINKS.map((val) => (
            <NavLink
              key={val.to} // Added key prop to avoid React warning
              exact
              activeClassName={style.activeLink}
              to={val.to}
            >
              <div>{val.text}</div>
            </NavLink>
          ))}
        </div>
        <div className={style.navBtn}>
          <button>Get Free Estimate</button>
        </div>
        <div className={style.icon}>
          <MenuIcon onClick={handleClick} fontSize="large" />
        </div>
      </div>
      <div id="sideBar" className={style.sideBar}>
        <div className={style.cross}>
          <CloseIcon onClick={handleClose} fontSize="large" />
        </div>

        {NAV_ROUTE_LINKS.map((val) => (
          <Link key={val.to} to={val.to}>
            <div className={style.sideItems}>{val.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
