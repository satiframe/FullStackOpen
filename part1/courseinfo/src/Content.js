function Part(props) {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

export default function Content(props) {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

/* 
While using props can be cleaner, destructuring is often easier to understand

function Part({ part, exercises }) {
  return (
    <p>{part} {exercises}</p>
  )
}

export default function Content({ part1, exercises1, part2, exercises2, part3, exercises3 }) {
  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
} 
*/
