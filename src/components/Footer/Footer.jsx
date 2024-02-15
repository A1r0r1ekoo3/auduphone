import React from 'react'
import './Footer.css'
import Header from '../Header/Header'

import f from '../../assets/f.png'
import t from '../../assets/t.png'
import i from '../../assets/i.png'

function Footer() {
  return (
    <div className='footer '>
        <Header/>
       
    <div className="df container">
     <div>
     <p className="df-text">
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>

      <span className="dt">Copyright 2021. All Rights Reserved</span>
     </div>
     <div className="v">
     <img src={f} alt="" className="s" />
     <img src={t} alt="" className="s" />
     <img src={i} alt="" className="s" />
     </div>
    </div>
    </div>
  )
}

export default Footer