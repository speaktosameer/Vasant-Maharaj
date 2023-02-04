import React from 'react'
import { TiTick } from 'react-icons/ti'

const About = () => {
  return (
    <div className="about-area overflow-hidden ">
    <div className="container">
        <div className="about-items">
            <div className="row align-center">

                {/* <!-- Thumb --> */}
                <div className="col-lg-6">
                    <div className="thumb">
                        <img src="assets/img/thumb/8.jpg" alt="Thumb"/>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer" data-to="40" data-speed="2000">40</div>
                                <div className="operator">K</div>
                            </div>
                            <span className="medium">Follower World Wide</span>
                        </div>
                    </div>
                </div>
                {/* <!-- End Thumb --> */}

                <div className="col-lg-6">
                    <div className="content">
                        <h2>Stories of Vasant Vijayji Mahara</h2>
                        <p>
                        Just before the establishment of Krishnagiri Jain Temple, Shri Vasant Vijayji Maharaj
dreamt of having the temple's opening ceremony on 5th May 2003. Lots of work still
needed to be completed before the temple could be completed
                        </p>
                        <ul>
                            <li>
                                <h5><TiTick/> Highest Success Rates</h5>
                                <p>
                                Based on the
discussions with the architect, it appeared that an additional 27 lakhs INR would be
needed to expedite the construction. Guruji had already promised that he would provide
the architect with the 27 lakhs the next day.
                                </p>
                            </li>
                            <li>
                                <h5><TiTick/> Real world impact</h5>
                                <p>
                                Guruji was under a lot of pressure as he did not want to break the promise made to the
architect. He had faith that his dream and faith would not lead him astray. However, the
tension still remained. It was on the next day morning that one of his disciples from
Bangalore approached him. This disciple’s wife was sick with UTS Cancer and the
medicines she was taking did not have much effect.
                                </p>
                            </li>
                            <li>
                                <h5><TiTick/> Real world impact</h5>
                                <p>
                                This disciple’s wife was sick with UTS Cancer and the
medicines she was taking did not have much effect. Guruji had conducted a yagna and
asked the disciple to feed his wife with bhasma mixed in water every hour. The disciple
and his wife followed the instructions of Guruji and took the bhasma+water every hour.
Just when the bhasma was finished consuming, the doctor took a report and found that
she was completely cured. It was not a coincidence but the trust Guruji had in Goddess
Padmavathi, that the disciple offered exactly 27 lakh INR on the same day that he had to
pay to the architect
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default About