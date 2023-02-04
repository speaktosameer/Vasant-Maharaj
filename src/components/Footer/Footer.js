import React from 'react'
import {RxCross2, RxDashboard} from 'react-icons/rx'
import {FaFacebook} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsInstagram, BsArrowRightCircle} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="navbar navbar-default navbar-sticky bootsnav" style={{backgroundColor:'#66666'}}>
            <div className="container-full">

                 {/* Start Header Navigation */}
                <div>
                    <a href="index.html">
                        <img src="assets/img/logo.png" className="logo" alt="Logo"  style={{display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '40%'}}/>
                    </a>
                </div>
                
            </div>

        </div>
  )
}

export default Footer