import React, { useContext, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardContext } from '../Context/cardContext';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../stylesheet/quiz.css'
import Card from '../components/Card';
import QuizCard from './QuizCard';



const Quiz = () => {
    const[questions,setQuestions] = useState('who is the president of india');
    const[answers,setAnswers] = useState('modi');
    const [options,setOptions]=useState(['modi','kedi','dhadi','thala'])
    const {qTitle}=useContext(cardContext)
    var settings={
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      accessibility:true,
    }

  return (
    <>
    <div className='quiz_main_cont'>
      <div className='quiz_first_cont'>
        <h1 className='quiz_topic'>{qTitle}</h1>
      </div>
      <div >
      <Slider {...settings} >
      {data.map((item,index)=>(
        // <div style={{backgroundColor:'blueviolet'}} key={index}>
        //   <div style={{margin:'30px'}}>
        //     <h1 style={{fontSize:'20px',fontWeight:'700',textAlign:'center'}}>{item.desc}</h1>
        //   </div>
        // </div>
        <QuizCard question={item.question} index={index} answers={item.answer} options={item.options}/>
      ))}
      </Slider>
      </div>
    </div>
    </>
  )
}

const data=[
  {
    question:"who is the prime minister?",
    answer:"modi",
    options:['modi','thala','sample','sample']
  },
  {
    question:"what is your name?",
    answer:"dont",
    options:['rock','jonh','sampl1e','sa1mple']
  },
  {
    question:"what is the fav dish?",
    answer:"biriyani",
    options:['dosa','idli','parota','biryiani']
  },
  {
    question:"who is the man?",
    answer:"alex",
    options:['alex','iman','andrew','drop']
  }
]

export default Quiz