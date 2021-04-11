import React, { useState } from 'react';

const Statistics = props => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}:</td>
          <td>{props.data}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Button = props => {
  return (
    <div>
      <button onClick={props.action}>{props.text}</button>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const incrementGood = () => {
    setGood(1 + good);
    setTotal(total + 1);
  };

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const incrementBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  const displayStats = () => {
    if (good !== 0 || neutral !== 0 || bad !== 0) {
      return (
        <div>
          <Statistics text='good' data={good} />
          <Statistics text='neutral' data={neutral} />
          <Statistics text='bad' data={bad} />
          <Statistics text='all' data={total} />
          <Statistics text='average' data={(good - bad) / total} />
          <Statistics text='positive' data={good.toFixed(2)} />
        </div>
      );
    } else {
      return (
        <div>
          <p>No feedback given</p>
        </div>
      );
    }
  };

  return (
    <div className='App'>
      <h1>Give feedback</h1>
      <Button text='good' action={incrementGood} />
      <Button text='neutral' action={incrementNeutral} />
      <Button text='bad' action={incrementBad} />

      <h2>Statistics</h2>
      {displayStats()}
    </div>
  );
}

export default App;
