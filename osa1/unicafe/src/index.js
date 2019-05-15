import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => (<tr key={text}><td>{text}:</td><td>{value}</td></tr>)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  return (
    <div>
      <h1>statistiikka</h1>
      {total ? (
        <table>
          <tbody>
            <Statistic text="hyvä" value ={good} />
            <Statistic text="neutraali" value={neutral} />
            <Statistic text="huono" value={bad} />
            <Statistic text="yhteensä" value={total || 0} />
            <Statistic text="keskiarvo" value={ (total || 0) / 3} />
            <Statistic text="postiivisia" value={ ((good / total) || 0)*100 + `%` } />
          </tbody>
        </table>
        ) : (<p>Ei yhtään palautetta annettu</p>)
      }
    </div>
  );
}

const Button = ({action, text}) => (<button onClick={action}>{text}</button>)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <p>
        <Button action={() => setGood(good + 1)} text="hyvä" />
        <Button action={() => setNeutral(neutral + 1)} text="neutraali" />
        <Button action={() => setBad(bad + 1)} text="huono" />
      </p>

      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)