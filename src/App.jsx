import { useState } from "react"
import "./index.css"

function App() {
  let [ami,setAmi] = useState(0)
  let [show,setShow] = useState(false)
  let handleclickone = ()=>{
    setShow(!show)
  }
  let handleincrement = () =>{
    if(ami < 10){
      setAmi(ami +1)
    }
  }
  let handledecrement = () =>{
    if(ami >0){
      setAmi(ami -1)
    }
  }
  return (
    <>
      <button className="click" onClick={handleclickone}>click</button>
      {show == true &&<div className="main">
      <button onClick={handledecrement}>-</button>
      <h2>{ami}</h2>
      <button onClick={handleincrement}>+</button>
    </div>}
    </>
  )
}

export default App
