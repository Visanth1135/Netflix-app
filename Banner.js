import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='Banner'>
            <div className='content'>
                <h1 className='title'></h1>
                <div className='banner-button'>
                    <button className='Button'>Play</button>
                    <button className='Button'>My list</button>
                </div>
                <h1 className='discription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
