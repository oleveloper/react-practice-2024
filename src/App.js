import { useEffect, useState } from 'react';
import './App.css';

function Counter({title, initValue}) {
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9999/counter')
    .then(resp=>resp.json())
    .then(result=>{
      setValue(result.value);
    });
  }, []);

  const add = () => {
    const newValue = value + step;
    setValue(newValue);
    setHistory([...history, newValue]);
  }

  return <>
    <h1>{title}</h1>
    <input type="number" value={step} onChange={(evt)=>{
      setStep(parseInt(evt.target.value));
    }}/>
    <button onClick={add}>+</button> {value}
    <ol>
      {history.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ol>
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
