import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import LandingPage from './components/container/LandingPage';
import LoginPage from './components/presentational/all-view/LoginPage/LoginPagePr';
import RegistrationPage from './components/presentational/all-view/RegistrationPage/RegistrationPagePr';
import './App.css'
function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={LandingPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/signup' exact component={RegistrationPage} />
        {/* <Route path='/' exact component={LoginPage} /> */}
        
      </div>
    </Router>
  );
}

export default App;
