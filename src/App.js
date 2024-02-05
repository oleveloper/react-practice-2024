import React from 'react';
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div>
      <Counter title="Counter" initValue={0}/>
    </div>
  );
}

export default App;
