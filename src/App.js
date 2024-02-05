import './App.css';

function Counter({title, initValue}) {
  return <>
    <h1>{title}</h1>
    <button>+</button> {initValue}
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
