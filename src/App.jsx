// import { useState } from 'react'
import './App.css'
import useDebouncedValue from './hooks/useDebouncedValue'
import useInterval from './hooks/useInterval'
import usePrevious from './hooks/usePrevious'
// import useCounterWithStep from './hooks/useCounterWithStep'
// import useInput from './hooks/useInput'
// import useLocalStorageState from './hooks/useLocalStorageState'
import useSessionStorageState from './hooks/useSessionStorageState'
// import useCounter from './hooks/useCounter'
// import useToggle from './hooks/useToggle'

function App() {
  // const { value, inc, dec, reset } = useCounter(0)
  // const { value, inc, dec, reset } = useCounterWithStep(0, 4)
  // const {onChange,reset,setValue,value} = useInput()
  // const { remove, setValue2, value } = useSessionStorageState("kohelet", "hagay")
  // const { current, previousValue, setCurrent, setValues } = usePrevious()
  // const { debounce, value } = useDebouncedValue("hagay", 5000)
  // const {setInterval} = useInterval(console.log("hello"), 1000)
  const{useEffect} = useInterval(console.log("here"), 1000, "adsf")
  return (
    <>
      {/* <button onClick={inc}>increamant</button>
      <button onClick={dec}>decreament</button>
      <button onClick={reset}>reset</button>
      <p>{value}</p> */}
      {/* <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
      <p>{value}</p> */}
      {/* <button onClick={reset}>reset</button>
      <input type="text" onChange={onChange}/>
      <p>{value}</p> */}
      {/* <button onClick={reset} >reset</button>
      <textarea type="text" value={value} onChange={onChange}/>
      <p>{value}</p> */}
      {/* <input type="text" value={value} onChange={(e)=>setValue2(e.target.value)}/>

      <button onClick={remove}>remove item</button> */}
      {/* <input type="text" onChange={setValues} />
      <p>previous: {previousValue}</p> */}

      {/* <p>{value}</p>
      <input type="text" onKeyUp={debounce} /> */}
      {/* <button onClick={()=>{
        console.log("here");
      }}>click</button> */}
      <button onClick={useEffect}>click here</button> 
      </>
 )
}

export default App