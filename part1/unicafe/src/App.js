import './App.css';
import { useState } from 'react';


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood =()=>{
    setGood(good+1)
  }
  const setToNeutral =()=>{
    setNeutral(neutral+1)
  }
  const setToBad =()=>{
    setBad(bad+1)
  }
  
  return(
    <>

      <h1>Give feedback</h1>

      <Button handleClick={() => setToGood()} text='good' />
      <Button handleClick={() => setToNeutral()} text='neutral' />
      <Button handleClick={() => setToBad()} text='bad' />

      <h2>Statistics</h2>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

    </>
  )
}

export default App;
