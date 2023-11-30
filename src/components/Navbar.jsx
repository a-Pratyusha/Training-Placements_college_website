import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (

    <nav className='w-[100vw]'>

      <div className='container-fluid '>
        <div className="row   hidden  d-lg-flex align-items-center justify-content-between p-3 text-light" style={{ backgroundColor: "#162241" }}>
          <div className="col-6 d-flex">
            <h5 className='fw-bold '>MGM's COLLEGE OF EGINEERING NANDED</h5>
            <h5 className='fw-bold ms-4'>Toll Free: 1364 | 0135 3520100</h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button className="btn shadow text-light fw-bold btn-sm btn-primary ms-2 me-2">OFFICIAL WEBSITE</button>


            <span className='d-flex justify-content-safe'>
              <InstagramIcon />|
              <TwitterIcon />|
              <FacebookIcon />

            </span>
          </div>

        </div>

        <div className="row navbar navbar-expand-lg d-flex bg-light ">
          <div className="container-fluid ">
            <span className='navbar-brand flex '>

              <img src="https://upload.wikimedia.org/wikipedia/en/4/41/MGM_Institute_of_Health_Sciences_Logo.png" alt="" className='navbar-brand rounded-full  object-fill  w-[50px] lg:w-[70px]' />

              <div className=' flex-col justify-center hidden lg:flex'>
                <span className='font-bold '>MGM College of Engineering Nanded</span>
                <span className='small text-gray-500'>Placement Department</span>
              </div>
            </span>


            <div className="flex " id="navbarNav">
              <ul className="navbar-nav hidden lg:flex align-items-center ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" > PLACEMENTS</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">ACHIVEMENTS</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">CAMPUS</a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">RECRUITMENT</a>
                </li>
           
                <li className="nav-item  me-3">
                  <button className='btn  shadow btn-primary'>
                    <Link to="/register" className="text-light text-decoration-none">
                      <span>CONTACT US</span>
                    </Link>
                  </button>
                </li>

              </ul>
              <div className='d-lg-none d-block'>
                <Menu className='fw-bold fs-1 cursor-pointer ' onClick={()=>setIsOpen(true)}/>
              </div>
              <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="cursor-pointer text-2xl" onClick={toggleMenu}>
          &times;
        </div>
        <ul className="mt-8 space-y-4">
          <li>
            <a href="#" className="text-white">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
             PLACEMENTS
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              ACHIVEMENT
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
             RECRUIMENT
            </a>
          </li>
        
          <li>
            <button className="btn bg-blue-500 text-white">
              <a href="/register" className="text-white">
                <span>CONTACT US</span>
              </a>
            </button>
          </li>
        </ul>
      </div>

            </div>
          </div>


        </div>


      </div>
    </nav>

  )
}

export default Navbar
