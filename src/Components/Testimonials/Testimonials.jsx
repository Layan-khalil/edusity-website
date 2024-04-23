import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from './../../assets/next-icon.png'
import back_icon from './../../assets/back-icon.png'
import user1 from './../../assets/user1.jpg'
import user2 from './../../assets/user2.jpg'
import user3 from './../../assets/user3.jpg'
import user4 from './../../assets/user4.jpg'
const Testimonials = () => {
  
    const slider =useRef();
        let Tx=0; {/*traslate x is zero */}
    let moveforward=()=>{
          if(Tx>-50){
            Tx-=25;
          }
          slider.current.style.transform=`translate(${Tx}%)`;
    }
    let movebackward=()=>{
       if(Tx<0)
       {
        Tx+=25;
       }
       slider.current.style.transform=`translate(${Tx}%)`;
    }




  return (
    <div className='testimonials' id='testimonials'>
      <img src={next_icon} alt=""  className='backicon' onClick={moveforward}/>
      <img src={back_icon} alt="" className='nexticon' onClick={movebackward}/>
      <div className='slider'> 
           <ul ref={slider}>
            <li>
            <div className="slide">
               <div className='user-info'>  
                  <img src={user1} alt="" />
                  <div>
                     <h2>Emily Williams</h2>
                     <span>Edusity, USA</span>
                  </div>
              </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions
                         I've ever made. The supportive community, state-of-the-art facilities, 
                         and commitment to academic excellence have truly exceeded my expectations.</p>

             </div>
            </li>
            <li>
            <div className="slide">
               <div className='user-info'>
                 <img src={user3} alt="" />
                 <div>
                     <h2>William Jackson</h2>
                     <span>Edusity, USA</span>
                 </div>
               </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                     The supportive community, state-of-the-art facilities, and commitment to academic excellence
                      have truly exceeded my expectations..</p>

             </div>
            </li>
            <li>
            <div className="slide">
               <div className='user-info'>
                    <img src={user2} alt="" />
                    <div>
                      <h2>Emily Williams</h2>
                      <span>Edusity, USA</span>
                     </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, 
                    state-of-the-art facilities, and commitment to academic
                     excellence have truly exceeded my expectations..</p>

             </div>
            </li>
            <li>
            <div className="slide">
                <div className='user-info'>
                 <img src={user4} alt="" />
                  <div>
                     <h2>William Jackson</h2>
                     <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, 
                    state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

             </div>
            </li>
           </ul>

        </div>
           
    </div>

  )
}

export default Testimonials
