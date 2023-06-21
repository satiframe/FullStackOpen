import './App.css';
import { useState } from 'react';


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  let all = good+neutral+bad
  let average = (good*1 + neutral*0 + bad*-1)/all

  return(
    <>
      <h2>Statistics</h2>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {(good*100)/all}</p>
    </>
  ) 
}

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

      <Statistics good={good} neutral={neutral} bad={bad} />

    </>
  )
}

export default App;
