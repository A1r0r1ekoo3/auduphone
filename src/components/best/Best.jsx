import React from 'react'
import './Best.css'
import bola from '../../assets/bola.png'
function Best() {
  return (
    <div className='best container'>
        <div className='o'>
            <h1 className="be-title">Bringing you the <span className='span'>best</span> audio gear</h1>
            <p className="be text">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
<img src={bola} alt="" className="be-img"  />
    </div>
  )
}

export default Best