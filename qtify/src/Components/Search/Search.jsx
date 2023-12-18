import React from 'react'
import style from "./Search.module.css"

const Search = ({placeholder,searchData}) => {
  return (
    <div className={style.wrapper}>
      <input type="text" placeholder={placeholder} className={style.search}/>
      <button className={style.btn}>
        <img src={require('../../assets/Search icon.png')} alt="svg" />
      </button>
    </div>
  )
}

export default Search;