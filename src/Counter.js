import React, { useEffect, useState } from 'react';
import style from './App.module.css';

export function Counter({ title, initValue }) {
  const [value, setValue] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9999/counter')
      .then(resp => resp.json())
      .then(result => {
        setValue(result.value);
      });
  }, []);

  const add = () => {
    const newValue = value + step;
    setValue(newValue);
    setHistory([...history, newValue]);

    const requestBody = { 'value': newValue };
    fetch('http://localhost:9999/counter/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
    })
      .then(resp => resp.json())
      .then(result => {
        console.log(result);
      });
  };

  return <div className={style.layout}>
    <h1>{title}</h1>
    <input type="number" value={step} onChange={(evt) => {
      setStep(parseInt(evt.target.value));
    }} />
    <button onClick={add}>+</button> {value}
    <ol>
      {history.map((elem, idx) => (
        <li key={idx}>{elem}</li>
      ))}
    </ol>
  </div>;
}
