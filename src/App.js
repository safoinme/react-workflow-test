import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/">
      <Header />

      </Router>
    </div>
  );
}

export default App;
