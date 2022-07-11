import React from 'react'
import { CounterContextProivder, usePageState } from '../Context'

export default function Counter() {
  return (
    <CounterContextProivder>
    <CounterComponent/>
    </CounterContextProivder>
  )
}


function CounterComponent(){
  const [counterState,counterDispatch]=usePageState()
  console.log(counterState)
  return <>
  <div>Counter : {counterState.counter}</div>
  <button onClick={()=>counterDispatch({type:'ADD_ONE'})}>Increse</button>
  </>

}