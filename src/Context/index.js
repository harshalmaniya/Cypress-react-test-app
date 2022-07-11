import React,{ useContext, useReducer } from "react";

const initialValue={
  state: {counter:0},
  dispatch: (action)=>{}
}

const counterContext=React.createContext(initialValue)
const {Provider}=counterContext


const counterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return {
        ...state,
        counter: state.counter+1
      }
   
    default:
      throw new Error("Invalid Action.");
  }
};


const CounterContextProivder=({children})=>{
  const [state,dispatch]=useReducer(counterReducer,{counter:0})
  return <Provider value={{state,dispatch}} >{children}</Provider>
}


const usePageState = () => {
  const { state, dispatch } = useContext(counterContext)
  console.log(counterContext)
  return [state, dispatch]
}


export { usePageState, CounterContextProivder }