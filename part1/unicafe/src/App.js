import './App.css';
import { useState } from 'react';


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  let all = good+neutral+bad
  let average = parseFloat(((good*1 + neutral*0 + bad*-1)/all).toFixed(1));
  let positive = parseFloat(((good * 100) / all).toFixed(1));

  return (
    <>
      <h2>Statistics</h2>

      {all === 0 ? ( <p>No feedback given</p> ) : 
        (
          <table>
            <tbody>
              <StatisticLine text="Good" value={good} />
              <StatisticLine text="Neutral" value={neutral} />
              <StatisticLine text="Bad" value={bad} />
              <StatisticLine text="All" value={all} />
              <StatisticLine text="Average" value={average} />
              <StatisticLine text="Positive" value={`${positive} %`} />
            </tbody>
          </table>
        )
      }
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

        <Button handleClick={() => setToGood()} text='Good' />
        <Button handleClick={() => setToNeutral()} text='Neutral' />
        <Button handleClick={() => setToBad()} text='Bad' />


        <Statistics good={good} neutral={neutral} bad={bad} />


    </>
  )
}

export default App;
