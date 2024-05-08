import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NestedMenu from '../NestedMenu'
import './nested-menu.css';

export default function BasicMenu({nestedLink}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        onMouseExit={handleClose}
      >
        Design Ideas <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseExit={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem className='menuItem' onClick={handleClose}>{nestedLink.map((val)=>
            ((val.haveNestedRoute)? <NestedMenu nestedLink={val.nestedLink}/> : <div>{val.text}</div>))}</MenuItem> */}
        {
            nestedLink.length >0 && nestedLink.map((item)=>{
                return(
                    <MenuItem>{item.text}</MenuItem>
                )
            })
        }
      </Menu>
    </div>
  );
}

// import { Dropdown, ButtonToolbar } from 'rsuite';

// const NestedMenu = ({ ...props }) => (
//   <Dropdown className='drop' {...props}>
//     <Dropdown.Item>New File</Dropdown.Item>
//     <Dropdown.Item>New File with Current Profile</Dropdown.Item>
//     <Dropdown.Item>Download As...</Dropdown.Item>
//     <Dropdown.Item>Export PDF</Dropdown.Item>
//     <Dropdown.Item>Export HTML</Dropdown.Item>
//     <Dropdown.Item>Settings</Dropdown.Item>
//     <Dropdown.Item>About</Dropdown.Item>
//   </Dropdown>
// );

// export default NestedMenu;
