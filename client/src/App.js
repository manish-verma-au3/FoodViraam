import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Resturant from './pages/Resturant';
import Logo from './components/Logo'


function App() {
  return (
    <div >
      <Logo/>
    <Router>
      <Switch>
      <div className='App'>
      <Route exact path="/" component={Home}/>
        <Route path='/resturant' component={Resturant}/> 
      </div>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
