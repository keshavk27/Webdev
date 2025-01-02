import { useState } from 'react'
import './App.css'

// function addvalue(){     //here, counter ka value update ho rha hai pr UI me update krne k lie hooks ka use krna hoga

//   if(counter>=0){
//     counter+=1;
//   }
// }



function App() {
  let [countvariable,setcountvariable]=useState(0);

  function addvalue(){
   
    countvariable+=1;
    setcountvariable(countvariable);
    
  }
  
  function remvalue(){          
    if(countvariable!=0){
      countvariable-=1;
      setcountvariable(countvariable);
    }
  }
  

  return (
    <>
    <h1>MY Counter</h1>
    <h3>counter value: {countvariable}</h3>

    <button id='add' onClick={addvalue}>Add value</button>
    <br />
    <button id='rem' onClick={remvalue}>Remove value</button>
    </>
  )
}

export default App
