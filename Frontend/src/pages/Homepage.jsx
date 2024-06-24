import React from 'react'
import '../stylesheet/home.css'

const Homepage = () => {
  return (
    <>
      <div className='main_cont'>
       <div className='left_cont'>
          <h1> Test Your Knowledge!</h1>
       </div>
       <div className='rightMain_cont'>
          <div className='right_cont'>
               <h1 style={{fontSize:"100px",fontWeight:"600",textAlign:'center'}}>Onestop Quiz Application To Test Your Inteligence</h1>
          </div>
          <div className='right_secMain_cont'>
            <div className='right_sec_cont'>
              <h1 style={{textAlign:"center"}}>Choose any of the below topics to start improve your knowledge!</h1>
            </div>
          </div>
          <div className='right_third_cont'>
            <div>
              <hr style={{backgroundColor:'black',width:'80%',height:"5px",alignSelf:"center",marginLeft:"20px"}}></hr>
            </div>
            <div>
              <h1>general</h1>
            </div>
          </div>
       </div>
      </div>
    </>
  )
}

export default Homepage