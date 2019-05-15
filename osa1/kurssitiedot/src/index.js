import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  const {name, exercises} = part;
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>);
}

const Content = ({course}) => {
    return (
        <div>
          {course.parts.map(part => (<Part part={part} key={part.name}/>))}
        </div>
    );
}

const Total = ({course}) => {
  const sum = course.parts.reduce((sum, part) => {return part.exercises + sum}, 0)

  return (
    <div>
      <p>yhteensä {sum} tehtävää</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))