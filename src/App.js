import React,{useState} from 'react';
import Questions from './questions.json';
import Display from './Display';
import "./Display.css"


const App = () => {
  const [marks,setMarks] = useState([]);
  let tempMarks = [];
  const handleChange = (index,mark) =>{
    tempMarks = marks
    tempMarks[index] = mark;
    setMarks([...tempMarks]);
  }

  return (
    <div>
      <center>
        <h1>HTML QUIZ</h1> 
        {Questions.map((qa,index) => <Display question={qa} handleChange={handleChange} index={index} />)}
        <div>
        <button onClick={()=>alert(marks.reduce((a,b)=>a+b,0)+'/10')}>End Quiz</button>
        </div>
      </center>
    </div>
  )
}

export default App