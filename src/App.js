import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from './home/Home.js';
import Home2 from './home/Home2';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Home2" component={Home2} />
      </Router>
    </div>
  );
}

export default App;
