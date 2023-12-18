import React from 'react'
import style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={style.wrapper}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={require('../../assets/vibrating-headphone 1.png')} alt="img" width={212}/>
        </div>
    </div>
  )
}

export default Hero