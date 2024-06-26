import React, { useContext, useState } from 'react'
import "../stylesheet/card.css"
import { MdNavigateNext,MdOutlineContactSupport  } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { cardContext } from '../Context/cardContext';

const Card=(props)=> {
    const [heading,setHeading]=useState(props.title)
    const navigate=useNavigate()
    const {qTitle,setQTitle} = useContext(cardContext)

    const handleclick=(e)=>{
      e.preventDefault()
      setQTitle(heading)
      navigate("/quizpage");
    }
  return (
    <>
      <div className='card_cont'>
        <h1 style={{display:'flex',alignItems:'center',gap:'10px'}}><MdOutlineContactSupport style={{fontSize:'30px'}}/>{heading}</h1>
        <button type='submit' style={{display:'flex',alignItems:'center'}} onClick={handleclick}>Go To Quiz <MdNavigateNext style={{fontSize:'25px',marginLeft:'5px'}}/></button>
      </div>
    </>
  )
}

export default Card
