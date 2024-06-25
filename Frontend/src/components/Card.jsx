import React, { useState } from 'react'
import "../stylesheet/card.css"
import { MdNavigateNext,MdOutlineContactSupport  } from "react-icons/md";

const Card=(props)=> {
    const [heading,setHeading]=useState(props.title)
  return (
    <>
      <div className='card_cont'>
        <h1 style={{display:'flex',alignItems:'center',gap:'10px'}}><MdOutlineContactSupport style={{fontSize:'30px'}}/>{heading}</h1>
        <button type='submit' style={{display:'flex',alignItems:'center'}}>Go To Quiz <MdNavigateNext style={{fontSize:'25px',marginLeft:'5px'}}/></button>
      </div>
    </>
  )
}

export default Card
