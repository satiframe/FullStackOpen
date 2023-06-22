import './App.css';
import { useState } from 'react';


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <p>{text}: {value}</p>
)

const Statistics = ({good, neutral, bad}) => {
  let all = good+neutral+bad
  let average = (good*1 + neutral*0 + bad*-1)/all
  let positive = ((good * 100) / all)

  return (
    <>
      <h2>Statistics</h2>

      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </>
      )}
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
