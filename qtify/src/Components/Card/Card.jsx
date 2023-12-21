import React from "react";
import style from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";


const Card = ({ data, type }) => {
  const getCard = (type) =>{
    switch(type){
      case "album":
        const { image, title, follows, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`}>
              <div className={style.wrapper}>
                <div className={style.card}>
                  <img src={image} alt="song" loading="lazy" />
                  <div className={style.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={style.chip}
                    />
                  </div>
                </div>
                <div className={style.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        ) 
        case "songs" : {
          const { image, title, follows, slug, songs } = data;
          return (
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
              <Link to={`/album/${slug}`}>
                <div className={style.wrapper}>
                  <div className={style.card}>
                    <img src={image} alt="song" loading="lazy" />
                    <div className={style.banner}>
                      <Chip
                        label={`${follows} Follows`}
                        size="small"
                        className={style.chip}
                      />
                    </div>
                  </div>
                  <div className={style.titleWrapper}>
                    <p>{title}</p>
                  </div>
                </div>
              </Link>
            </Tooltip>
          )
        }
        default : 
          return <></>
    }
  }
  
  return getCard(type);
  
};

export default Card;
