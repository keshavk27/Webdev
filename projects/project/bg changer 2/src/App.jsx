import { useState } from 'react'

function App() {
  let [color,setColor]=useState("black")

  return (
    <>
      <div id='bgchanger' className="w-full flex h-screen flex-center items-center justify-center" style={{backgroundColor:color}}>
        <h1 className="text-4xl font-bold text-neon-green mb-8">
        Be-ware of colors!
        </h1>        
        <div className="fixed w-full bottom-12 flex items-center justify-center" style={{ bottom: '80px' }}>
          <div className="flex space-x-4 ">
            <button onClick={()=>setColor("red")} className=" w-20 h-10 px-3 py-2 bg-red-500 text-white rounded-3xl  shadow-md hover:shadow-lg focus:outline-none">
            Red
            </button>
            <button onClick={()=>setColor("blue")} className="w-20 h-10 px-3 py-2 bg-blue-500 text-white rounded-3xl shadow-md hover:shadow-lg focus:outline-none">
            Blue
            </button>
            <button onClick={()=>setColor("green")} className="w-20 h-10 px-3 py-2 bg-green-500 text-white rounded-3xl shadow-md hover:shadow-lg focus:outline-none">
            Green
            </button>
            <button onClick={()=>setColor("#E6E6FA")} className="w-20 h-10 px-3 py-2 bg-purple-300 text-white rounded-3xl shadow-md hover:shadow-lg focus:outline-none">
            Lavender
            </button>
            <button onClick={()=>setColor("gray")} className="w-20 h-10 px-3 py-2 bg-gray-500 text-white rounded-3xl shadow-md hover:shadow-lg focus:outline-none">
            Gray
            </button>
            <button onClick={()=>setColor("white")} className="w-20 h-10 px-3 py-2 bg-white text-black rounded-3xl shadow-md hover:shadow-lg focus:outline-none">
            White
            </button>
          </div>  
        </div>  
      </div>  

    </>
  )
}

export default App
