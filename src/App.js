import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom"
import Home from './components/home/Home.js';
import ArtHome from './components/home/ArtHome.js';
import ArtistHome from './components/home/ArtistHome.js';
import QNAHome from './components/home/QNAHome.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/ArtHome" component={ArtHome} />
        <Route path="/ArtistHome" component={ArtistHome} />
        <Route path="/QNAHome" component={QNAHome} />
      </Router>
    </div>
  );
}

export default App;
