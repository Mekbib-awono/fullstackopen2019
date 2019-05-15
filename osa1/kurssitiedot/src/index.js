import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part, exercises}) => {
    return (
        <div>
            <p>{part} {exercises}</p>
        </div>);
}

const Content = (props) => {
    const {exercises1, exercises2, exercises3, part1, part2, part3} = props;
    return (
        <div>
          <Part part={part1} exercises={exercises1} />
          <Part part={part2} exercises={exercises2} />
          <Part part={part3} exercises={exercises3} />
        </div>
    );
}

const Total = ({exercises1, exercises2, exercises3}) => {
  return (
    <div>
      <p>yhteensä {exercises1 + exercises2 + exercises3} tehtävää</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14  

  return (
    <div>
      <Header course={course} />
      <Content exercises1={exercises1}  exercises2={exercises2} exercises3={exercises3} 
                part1={part1}  part2={part2} part3={part3} />
      <Total exercises1={exercises1}  exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))