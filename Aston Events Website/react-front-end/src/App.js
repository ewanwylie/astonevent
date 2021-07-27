import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/header/Nav'
import Footer from './components/footer/footer'
import LandingPage from './components/sections/LandingPage'
import UpcomingEvents from './components/sections/upcomingEvents'
import CreatAnEvent from './components/sections/createAnEvent'
import Events from './components/sections/Events'
import SignIn from './components/register/SignIn'
import Register from './components/register/Register'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/upcomingEvents" exact component={UpcomingEvents} />
          <Route path="/createAnEvent" exact component={CreatAnEvent} />
          <Route path="/Events" exact component={Events} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/Register" exact component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
