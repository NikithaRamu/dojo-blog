import logo from './logo.svg';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import Create from './Create';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Navbar/>
      <div className='content'>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/create">
          <Create/>
        </Route>
      </Switch>
      </div>

    </div>
    
    </BrowserRouter>
  );
}

export default App;
