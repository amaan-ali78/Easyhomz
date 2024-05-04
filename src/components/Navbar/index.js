
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link,NavLink } from 'react-router-dom';
import {ROUTES} from '../../utils/constants'
import {NAV_ROUTE_LINKS} from '../../utils/data'
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import style from './navbar.module.css'; // Import your SCSS file

const Navbar = () => {
  function handleClick(){
    document.getElementById('sideBar').style.display='flex';
}
function handleClose(){
    document.getElementById('sideBar').style.display='none';
}
    return <div>
    <div className={style.container}>
        <div className={style.logo}>
            <img src="https://eazyhomz.com/wp-content/uploads/2024/03/logo-1536x1536.png" alt="eazyhomz" />
            <h1>Eazyhomz</h1>
        </div>
        <div className={style.navItem}>
            {NAV_ROUTE_LINKS.map (val => ( <NavLink exact activeClassName={style.activeLink}  to={val.to}><div>{val.text}</div></NavLink >))}
        </div>
        <div className={style.navBtn}>
            <button>Get Free Estimate</button>
        </div>
        <div className={style.icon}>
        <MenuIcon onClick={handleClick} fontSize="large"/>
        </div>
    </div>
    <div id='sideBar' className={style.sideBar}>
        <div className={style.cross}><CloseIcon onClick={handleClose} fontSize='large'/></div>
        
        {NAV_ROUTE_LINKS.map (val => ( <Link to={val.to}><div className={style.sideItems}>{val.text}</div></Link>))}
    </div>
</div>
  
};

export default Navbar;

