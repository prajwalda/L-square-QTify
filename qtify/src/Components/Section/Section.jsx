import React, { useState } from "react";
import style from "./Section.module.css"
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(false);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className={style.header}>
        <h3>{title}</h3>
        <h4 className={style.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse All": "Show All"}</h4>
      </div>
      {
        data.length === 0 ? (
            <CircularProgress />
            ): (
                <div className={style.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={style.wrapper}>
                            {data.map((ele) => (
                                <Card data={ele} type={type} />
                            ))}
                        </div>
                    ):(
                        // Carousel
                        null
                    )}
                </div>
            )}
        </div>
    )
}
export default Section;
