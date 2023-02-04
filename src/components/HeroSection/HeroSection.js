import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'

const HeroSection = () => {
  return (
    <div className="banner-area auto-height text-light banner-business bg-cover shadow theme" style={{backgroundImage: "url('assets/img/thumb/2.jpg')"}}>
        <div className="item">
            <div className="box-table">
                <div className="box-cell">
                    <div className="container">
                        <div className="banner-items">
                            <div className="row align-center">
                                <div className="col-lg-6">
                                    <div className="content">
                                        <h4 className="wow fadeInLeft">SANIDHYA RASHTRASANT MANTRA SHIROMAN</h4>
                                        <h2 className="wow fadeInDown" data-wow-delay="500ms"><strong>Spiritual Leader</strong> Spread Jainism</h2>
                                        <p className="wow fadeInLeft" data-wow-delay="900ms">
                                            He is envolved in different areas Astrology Medicine, Yoga, Mantra Vigyan, Business, Education 
                                        </p>
                                        <div className="button wow fadeInDown" data-wow-delay="1200ms">
                                            <a href="https://www.youtube.com/embed/6TQEvyW-zhY" className="popup-youtube video-btn"><i className="fal"><AiFillPlayCircle/></i>My Story</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 thumbs wow fadeInDown" style={{paddingBottom:'100px'}}>
                                    <img src="assets/img/thumb/4.png" alt="Thumb"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection