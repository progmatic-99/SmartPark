import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import LoginPage from './components/container/LandingPage';
import './App.css'
function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={LoginPage} />
        {/* <Route path='/login' exact component={login} /> */}
        {/* <Route path='/signup' exact component={LoginPage} /> */}
        {/* <Route path='/' exact component={LoginPage} /> */}
      </div>
    </Router>
  );
}

export default App;
