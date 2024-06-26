import React, { useEffect, useState } from 'react'
import '../stylesheet/quizCard.css'

const QuizCard=(props)=> {
    const [opt,setopt]=useState(props.options)
    const [ans,setAns]=useState('')
    const [clas,setClas]=useState('quizC_main_cont')

    const handleAns=()=>{
        if(ans==''){
            setClas('quizC_main_cont')
            console.log(props.answers)
        }
        else if(ans==props.answers){
            setClas('quizC_main_cont_correct')
            console.log(props.answers)
        }
        else{
            setClas('quizC_main_cont_wrong')
            console.log(props.answers)
        }
    }
    // useEffect(()=>{
    //     handleAns()
    // },[])
    
  return (
    <>
      <div className={clas}>
        <div>
            <h1 style={{fontSize:'30px',fontWeight:'500'}}>{props.index+1}. {props.question}</h1>
        </div>
        <div>
            {opt.map((item,index)=>(
                <div className='quizC_opt' key={index}>
                    <input type='radio' value={item} name={props.question} onChange={()=>{setAns(item)}} key={index}/>
                    <p style={{display:'inline-block'}}>{item}</p>
                </div>
            ))}

        </div>
        <button className='quizC_btn' onClick={handleAns}>Check</button>
      </div>
    </>
  )
}

export default QuizCard
