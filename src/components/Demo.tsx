import { useState } from "react"
import { IProps } from "../App"
import { Outlet } from "react-router"
export function Demo({propsData}:IProps){
  
  const [count, setCount] = useState<number>(propsData.initialCount)
  const func = ()=>{
    setCount(count+1)
  }
  const func1 = ()=>{
    setCount(count-1)
  }
  return (
    <>
    <h1>React Basic Concepts Implementation</h1>
    <div>Count Value : {count}</div>
    <button onClick={func}>Increment Count</button>
    <button onClick={func1}>Decrement Count</button>
    <Outlet></Outlet>
    </>
  )
}