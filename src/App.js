import './App.css';

function Counter({title, initValue}) {
  function add() {
    alert('Add!');
  }
  
  return <>
    <h1>{title}</h1>
    <button onClick={add}>+</button> {initValue}
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
