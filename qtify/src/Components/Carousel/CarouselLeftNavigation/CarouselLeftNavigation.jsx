import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import style from "./CarouselLeftNavigation.module.css"
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

  useEffect(()=>{
    swiper.on("slideChange",function(){
      setIsBeginning(swiper.isBeginning);
    })
  },[]);               

  return (
    <div className={style.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation