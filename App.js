import React ,{useState} from 'react';
import "./App.css"

function App() {

 const [calc,setCalc]=useState("");
 const [result,setResult]=useState("");

 const ops=['/','*','+','-','.'];

 const updateCalc=(value)=>{
  if(
     (ops.includes(value) && calc==='' )||
     (ops.includes(value) && ops.includes(calc.slice(-1)))
  )
  {
    return;
  }
  setCalc(calc+value);

  console.log(calc);
  if(!ops.includes(value) ){
    setResult(eval(calc+value).toString());
  }

 }
  
 const calculate=()=>{
  setCalc(eval(calc).toString());
 }

 const deletelast=()=>{
  if(calc===''){
    return;
  }

  const value= calc.slice(0,-1);
  setCalc(value);
 }

 function clear (){
  const value='';
  setCalc(value);
  setResult(value);
 }
 

  return (
    <div className="maingrid">
        <div className="output">
          <div className="previous">{result}</div>
          <div className="current">{calc || "0"}</div>
        </div>

        <button className="spanone" onClick={clear}>AC</button>
        <button className="spanone" onClick={deletelast}>DEL</button>
        <button className="spanone" onClick={()=>updateCalc('(')}>(</button>
        <button className="spanone" onClick={()=>updateCalc(')')}>)</button>
        <button className="spanone" onClick={()=>updateCalc('1')}>1</button>
        <button className="spanone"onClick={()=>updateCalc('2')}>2</button>
        <button className="spanone"onClick={()=>updateCalc('3')}>3</button>
        <button className="spanone" onClick={()=>updateCalc('4')}>4</button>
        <button className="spanone" onClick={()=>updateCalc('5')}>5</button>
        <button className="spanone" onClick={()=>updateCalc('6')}>6</button>
        <button className="spanone" onClick={()=>updateCalc('7')}>7</button>
        <button className="spanone" onClick={()=>updateCalc('8')}>8</button>
        <button className="spanone" onClick={()=>updateCalc('9')}>9</button>
        <button className="spanone" onClick={()=>updateCalc('.')}>.</button>
        <button className="spanone" onClick={()=>updateCalc('*')}>x</button>
        <button className="spanone" onClick={()=>updateCalc('+')}>+</button>
        <button className="spanone" onClick={()=>updateCalc('0')}>0</button>
        <button className="spanone" onClick={()=>updateCalc('/')}>÷</button>
        <button className="spanone" onClick={()=>updateCalc('-')}>-</button>
        <button className="spanone" onClick={calculate}>=</button>
    </div>
  );
}

export default App;
