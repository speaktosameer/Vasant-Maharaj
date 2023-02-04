import React from 'react'
import {TiTick} from 'react-icons/ti'


const WorkDone = () => {
  return (
    <div className="why-choose-us text-light choose-us-style-three bg-dark default-padding">
        <div className="thumb" style={{backgroundimage: "url('assets/img/2440x1578.png')"}}></div>
        <div className="container">
            <div className="row">
            <div className="col-lg-6 thumbs wow fadeInDown">
                    <img src="assets/img/thumb/6.png" alt="Thumb"/>
                </div>
                <div className="col-lg-6 choose-us-style-three">
                    <h2 className="wow fadeInUp">What He Has Done </h2>
                    <div className="wow fadeInLeft" data-wow-delay="500ms">
                        <p>
                        </p>
                        <h4>Spread Jainism in more than <strong>70</strong> countries</h4>
                        <ul>
                            <li><TiTick/> Has converted 80,000 non-Jains to vegetarianism!</li>
                            <li><TiTick/> Provided health insurance of Rs. 30 Cr to children in schools in Tamil Nadu</li>
                            <li><TiTick/> Convinced 268 non-Jains to do an Attham Tap (3 days without food, no water after sunset)</li>
                             <li><TiTick/> Convinced around 3,000 non-Jains to do Upvaas (1 day without food, no water after sunset)</li>
                            <li><TiTick/> Author of 108 Mahagrantham weighing 13 kg</li>
                            {/* <li><TiTick/> More than 175 branches established in important Indian cities like Bengaluru, Mumbai,Chennai, and Kolkata as well as international locations like Australia, Egypt, London, Rome,Pisa, Venice, Florence, etc.</li> */}
                        </ul>
                        <a className="btn btn-theme effect btn-sm" href="#">Read More</a>
                    </div>
                </div>
                

            
            </div>
        </div>
    </div>
  )
}

export default WorkDone