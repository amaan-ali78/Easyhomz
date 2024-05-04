import './layout.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import GoToTop from '../GoToTop';


const Layout = ({
  children,
}) => {
  return (
    <>
    <Navbar />
    <div className='layout-container' >
      <div className='layout' >
        {children}
      </div> 
    </div >
    <GoToTop/>
    <Footer/>
    </>
  )
}

export default Layout;