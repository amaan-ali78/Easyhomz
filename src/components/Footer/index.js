import style from "./footer.module.css";
import { NAV_ROUTE_LINKS } from "../../utils/data";
import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img
          src="https://eazyhomz.com/wp-content/uploads/2024/03/logo-1536x1536.png"
          alt="eazyhomz"
        />
        <h1>Easyhomz</h1>
      </div>
      <div className={style.content}>
        <div className={style.about}>
          <h2>About</h2>
          <div className={style.itemContainer}>
            {NAV_ROUTE_LINKS.map((val) => (
              <Link to={val.to}> <div className={style.aboutItem}><h2>{val.text}</h2></div></Link>
            ))}
          </div>
        </div>
        <div className={style.address}>
          <h2>Address</h2>
          <div className={style.addressItem}>
            <div className={style.add}>
             <MailOutlineIcon fontSize="large"/>
             <h3>care@eazyhomz.com</h3>
            </div>
            <div className={style.add}>
            <CallOutlinedIcon fontSize="large"/>
            <h3>+91 9876543210</h3>
            </div>
            <div className={style.add}>
            <LocationOnIcon fontSize="large"/>
            <h3>Dubai , UAE</h3>
            </div>
          </div>
        </div>
        <div className={style.signUp}>
          <h2>Sign Up</h2>
          <p>Subscribe to get all latest updates <span>*</span></p>
          <input placeholder="Enter your E-mail" type="text" required></input>
        </div>
      </div>
    </div>
  );
};

export default Footer;
