import { useState } from 'react';
import './App.css';

function Counter({title, initValue}) {
  const [value, valueState] = useState(initValue);

  function add() {
    valueState(value + 1);
  };
  
  return <>
    <h1>{title}</h1>
    <button onClick={add}>+</button> {value}
  </>
}

function App() {
  return (
    <div>
      <Counter title="Counter" initValue={0}/>
    </div>
  );
}

export default App;
