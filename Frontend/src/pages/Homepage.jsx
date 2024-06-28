import React from 'react'
import '../stylesheet/home.css'
import Card from '../components/Card'
import { CgScrollV } from "react-icons/cg";
import knowledge from '../assets/knowledge.png'
import removed from '../assets/bgRemoved.png'
import owl from '../assets/owl.png'
import { useNavigate } from 'react-router-dom';
 
const Homepage = () => {
  const navigate=useNavigate()

  const handleLogin=()=>{
    navigate('/')
  }

  return (
    <>
      <div className='main_cont'>
       <div className='left_cont'>
          <img src={knowledge} alt='image' className='rotated_text' width="900px"/>
          <CgScrollV style={{fontSize:'70px'}}/>
          <img src={knowledge} alt='image' className='rotated_text' style={{marginTop:'100px'}} width="900px"/>
       </div>
       <div className='rightMain_cont'>
          <div className='right_cont' style={{position:'relative'}}>
               <h1 style={{fontSize:"100px",fontWeight:"600",textAlign:'center',marginLeft:'30px'}}>Onestop Quiz Application To Test <span style={{color:'transparent'}}>jj</span>Your Inteligence</h1>
               <img src={removed} alt='image' width="400px" style={{position:'absolute',left:'20px',bottom:'0px'}}/>
               <img src={owl} alt='image' width="220px" style={{position:'absolute',right:'230px',bottom:'-27px'}}/>
          </div>
          <div className='right_secMain_cont'>
            <div className='right_sec_cont'>
              <h1 style={{textAlign:"center"}}>Choose any of the below topics to start improve your knowledge!</h1>
              <hr style={{backgroundColor:'black', height:'2px',width:'70%'}}></hr>
              <button onClick={handleLogin}>Login </button>
            </div>
          </div>

          <div style={{display:'flex',justifyContent:"center",marginBottom:"20px"}}>
              <hr style={{backgroundColor:'rgb(105, 102, 102)',width:'90%',height:"3px",borderRadius:'20px',boxShadow: "rgba(47, 57, 193) 5px 10px 15px"}}></hr>
            </div>

          <div className='right_third_cont' >
            <Card title={"Science"}/>
            <Card title={"social"}/>
            <Card title={"finance"}/>
            <Card title={"technology"}/>
            <Card title={"general"}/>
          </div>
          <div style={{width:'90%',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',bottom:'0px'}}>
            <div style={{position:'absolute',bottom:'-240px'}}>
              <p>© 2024 Knowledge. All rights reserved.</p>
            </div>
          </div>
       </div>
      </div>
    </>
  )
}

export default Homepage