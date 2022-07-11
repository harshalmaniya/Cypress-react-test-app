import Counter from "../../src/Components"
import { usePageState } from "../../src/Context"

const useCounter =()=>{
  const [pageState,pageDispatch]=usePageState()
  return {state:pageState,setState:pageDispatch}
}

describe('Counter.cy.js', () => {
  it('playground', () => {

     mountHook(() => useCounter()).then((result) => {
      
    })
    console.log('works')
    console.log(cy)
    const value=  cy.mount(<Counter/>)
    console.log(value)
  })
})