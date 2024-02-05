import { useState } from 'react';
import './App.css';

function Counter({title, initValue}) {
  const [value, setValue] = useState(initValue);

  return <>
    <h1>{title}</h1>
    <button onClick={() => setValue(value + 1)}>+</button> {value}
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
