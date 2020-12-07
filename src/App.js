import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GroceryApp from './GroceryApp';
import './App.css';

function App() {
  return (
    //Contains all of the Routes
    <>
    <Router>
      <Navbar />
        <GroceryApp/>
        <Switch>
          <Route path ='/' exact components />
        </Switch>
    </Router> 
    </>
  );
}

export default App;
