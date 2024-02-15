import React from 'react'
import'./Kerak.css'
function Kerak() {
  return (
    <div className='kerak container'>
        <div className="k-one">
            <h1 className="k-title">FEATURES</h1>
            <p className="k-text1">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
<br /><br />
The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
        </div>
        <div className="k-two">
            <h2 className="k-title">IN THE BOX</h2>
            <ul className="k-list">
                <li className="k-item">
                    <span className="k-s">1x</span> <p className="k-text">Headphone Unit</p>
                </li>
                <li className="k-item">
                    <span className="k-s">2x</span> <p className="k-text">Replacement Earcups</p>
                </li>
                <li className="k-item">
                    <span className="k-s">1x</span> <p className="k-text">User Manual</p>
                </li>
                <li className="k-item">
                    <span className="k-s">1x</span> <p className="k-text">Travel Bag</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Kerak