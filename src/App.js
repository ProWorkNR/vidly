import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import MovieForm from './components/movieFrom';
import Rentals  from './components/rentals';
import NotFound from './components/not-found'; 
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className="container">
      <Switch>
        <Route path='/login' component={LoginForm}/>
        <Route path='/movies/:id' component={MovieForm}/>
        <Route path='/movies' component={Movies} />
        <Route path='/customers' component={Customers} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/not-found' component={NotFound}/>
        <Redirect from='/' exact to='/movies' />
        <Redirect to='/not-found' />
      </Switch>
    </main>
    </React.Fragment>
  );
}
export default App;
