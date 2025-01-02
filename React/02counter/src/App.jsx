import { useState,useCallback } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);       //setcounter is a method which update the value of cunter variable

  const addValue=()=>{
    counter+=1;
    if(counter>20)
    {
      alert("value cant be more than 20");
      counter=20;
    }
    else{
      setCounter(counter);
    }
  
    console.log("clicked",counter);
  }
  const decValue=()=>
  {
    counter-=1;
    if(counter<0)
    {
      alert("value cant be negative");
      counter=0;
    }
    else{
      setCounter(counter);
    }
    console.log("decclicked",counter);
  }

  return (
    <>
    <h1>This is a counter machine</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue} >Add value</button>
    <br/>
    <button onClick={decValue}>Decrease value</button>
    </>
  )
}

export default App
