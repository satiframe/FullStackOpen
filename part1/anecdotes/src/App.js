import { useState } from 'react'

const NextAnecdote = ({handleAnecdote}) => {
  return(
    <button onClick={handleAnecdote}>
      Next anecdote
    </button>
  )
}

const VoteAnecdote = ({handleVote}) => {
  return(
    <button onClick={handleVote}>
      Vote
    </button>
  )
}

const BestAnecdote = ({allAnecdotes, allVotes}) => {
  const mostVoted = Math.max(...allVotes)
  const mostVotedIdex = allVotes.indexOf(mostVoted)
  const mostVotedAnecdote = allAnecdotes[mostVotedIdex]

  return(
    <div>
      <h2>Anecdote with most votes</h2>
      {mostVoted === 0 ? 
        (
          <p>Start voting for your favorite anecdote!</p>
        ) : (
          <>
            <p>{mostVotedAnecdote}</p>
            <p>Has {mostVoted} votes</p>
          </>
        )
      }
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdotes = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote)
  }

  const handleVote = () => {
    const copy = [...votes] 
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Has {votes[selected]} votes</div>
      <VoteAnecdote handleVote={() => handleVote()} />
      <NextAnecdote handleAnecdote={() => randomAnecdotes()}/>
      <BestAnecdote allAnecdotes={anecdotes} allVotes={votes}  />
    </div>
  )
}

export default App