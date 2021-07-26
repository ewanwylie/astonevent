import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/header/Nav'
import Footer from './components/footer/footer'
import LandingPage from './components/sections/LandingPage'
import ListOfCompanies from './components/sections/companies/ListOfCompanies'
import Company from './components/sections/company/Company'
import Opportunities from './components/sections/Opportunities'
import Opportunity from './components/sections/Opportunity'
import SignIn from './components/register/SignIn'
import Register from './components/register/Register'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/company" exact component={Company} />
          <Route path="/listOfCompanies" exact component={ListOfCompanies} />
          <Route path="/opportunities" exact component={Opportunities} />
          <Route path="/opportunity" exact component={Opportunity} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/Register" exact component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
