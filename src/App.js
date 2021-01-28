import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from './home/Home.js';
import ArtHome from './home/ArtHome';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/ArtHome" component={ArtHome} />
      </Router>
    </div>
  );
}

export default App;
