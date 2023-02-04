import React from 'react'
import {FaAward} from 'react-icons/fa'

const Achievements = () => {
  return (
    <div className="about-area default-padding">
         {/* <!-- Shape --> */}
        <div className="fixed-bottom-shape" style={{backgroundimage: "url('assets/img/shape/19.png')"}}></div>
        {/* <!-- Shape --> */}
        <div className="container">
            <div className="about-items">
            <div className="heading-center text-center">
                        {/* <h5>What we do</h5> */}
                        <h2>Awards & Achievements</h2>
                    </div>
                <div className="row align-center">
                    <div className="col-lg-6 about-style-four">
                        <div className="thumb-box">
                            <img src="assets/img/thumb/7.png" alt="Thumb"/>
                            <div className="shape">
                                <img src="assets/img/shape/6.png" alt="Shape"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 about-style-four">
                        <div className="statistics text-center">
                            <div className="item">
                                <div className="chart" data-percent="65" data-track-color="#e7e7e7" data-bar-color="#0e2258"><span>90%</span></div>
                                <h5>Affordable Cost</h5>
                            </div>
                            <div className="item">
                                <div className="chart" data-percent="85" data-track-color="#e7e7e7" data-bar-color="#0e2258"><span>85%</span></div>
                                <h5>Quality of Work</h5>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-6 about-style-four">
                        <ul>
                            <li>
                                <i className="fal"><FaAward/></i>
                                <h4>Ambassador for Peace</h4>
                                <p>
                                at Luton Oshwal Association, UK
                                </p>
                            </li>
                            <li>
                            <i className="fal"><FaAward/></i>
                                <h4>Diplomatic Counselor </h4>
                                <p>
                                for India in the International Parliament for Safety & Peace
                                </p>
                            </li>
                            <li>
                            <i className="fal"><FaAward/></i>
                                <h4>Ambassador for Peace</h4>
                                <p>
                                at Universal Peace Federation

                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements