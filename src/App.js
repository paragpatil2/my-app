import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Stateexample from './components/Stateexample';
import Propexe from './components/Propexe';
import JSX from './components/jsx';
import JsxAttribute from './components/JsxAttribute';
import JsxIf from './components/JsxIf';
import JsxChild from './components/JsxChild';
import State from './components/State';

function App() {
  const data = {fname:'Reecha' , lname:'Sinha', age:'10'};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Function Component is rendered</h1>
      <Welcome/>
      <h1>Class componentsis rendered</h1>
      <Greet />
      <h1> Use of State </h1>
      <Stateexample />
      <h1> Use of Props </h1>
      <Propexe dataattribute = {data}/>
      <h1> JSX Example </h1>
      <JSX />
      
      <h1>Jsx Attribute </h1>
      <JsxAttribute />

      <h1>Jsx if statement Example</h1>
      <JsxIf />

      <h1>Jsx child is used</h1>
      <JsxChild />

      <h1> State component used with class component</h1>
      <State />

      </header>
    </div>
  );
}

export default App;
