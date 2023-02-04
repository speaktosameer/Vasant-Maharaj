import React from 'react'
import {RxCross2, RxDashboard} from 'react-icons/rx'
import {FaFacebook} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsInstagram, BsArrowRightCircle} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-sticky bootsnav">
            <div className="container-full">

                {/* Start Atribute Navigation */}
                <div className="attr-nav">
                    <ul>
                        {/* <li className="search"></li> */}
                        <li className="side-menu">
                            <a href="#">
                                <span className="bar-1"></span>
                                <span className="bar-2"></span>
                                <span className="bar-3"></span>
                            </a>
                        </li>
                    </ul>
                </div>        
                {/* End Atribute Navigation */}

                 {/* Start Header Navigation */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <RxDashboard/>
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/img/logo.png" className="logo" alt="Logo" />
                    </a>
                </div>
                 {/* End Header Navigation  */}

                 {/* Collect the nav links, forms, and other content for toggling  */}
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className="dropdown">
                            <a href="#">Home</a>
                        </li>
                        <li className="dropdown">
                            <a href="#" >Wisdom</a>
                        </li>
                        <li className="dropdown">
                            <a href="#">Event</a>
                        </li>
                        <li className="dropdown">
                            <a href="#">OutReach</a>
                        </li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
                 {/* navbar-collapse  */}
            </div>

             {/* Start Side Menu  */}
            <div className="side">
                <a href="#" className="close-side"><RxCross2/></a>
                <div className="widget">
                    <img src="assets/img/logo.png" alt="Logo" />
                    <p>
                    He is a deeply spiritual Jainmonk, with a secular & universal orientation to the pursuit of non-violent conflict resolution, promotion of peace, tolerance, and brother-hood of man.                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p> 
                                    <strong>Shree Parshwa Padmavati Nagar,<br/>Sadhanpalli, Sundampatti Post,<br/>Post: Orappam Krishnagir</strong>
                                </div>
                            </li>
                            {/* <li>
                                <div className="content">
                                    <p>Email</p> 
                                    <strong>support@validtheme.com</strong>
                                </div>
                            </li> */}
                            <li>
                                <div className="content">
                                    <p>Contact</p> 
                                    <strong>+91 4343 329 323</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4 className="title">Get Subscribed!</h4>
                    <form action="#">
                        <div className="input-group stylish-input-group">
                            <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
                            <span className="input-group-addon">
                                <button type="submit">
                                <BsArrowRightCircle/>
                                </button>  
                            </span>
                        </div>
                    </form>
                </div>
                <div className="widget social">
                    <ul className="link">
                        <li><a href="#"><FaFacebook/></a></li>
                        <li><a href="#"><SiTwitter/></a></li>
                        <li><a href="#"><RxLinkedinLogo/></a></li>
                        <li><a href="#"><BsInstagram/></a></li>
                    </ul>
                </div>
            </div>
             {/* End Side Menu  */}

        </nav>
  )
}

export default Navbar