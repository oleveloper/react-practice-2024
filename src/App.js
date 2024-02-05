import './App.css';

function Counter(props) {
  return <>
    <h1>{props.title}</h1>
    <button>+</button> 0
  </>
}

function App() {
  return (
    <div>
      <Counter title="Counter"/>
    </div>
  );
}

export default App;
