import React, {Component} from 'react';
import backgroundImg from '../../../../images/background.jpg';
import logo from '../../../../images/logo.svg';
import './LandingPagePrWeb.css';
import {Link} from 'react-router-dom';



class LoginPage extends Component{
    handleClick(e){
        const removeActiveClass = (arr) =>{
            arr.forEach((item, ind) => {
                document.getElementById(item).classList.remove('active');
            })
        } 
        const arr = ["about", "login", "signup"]
        removeActiveClass(arr);
        e.target.classList.add('active');
    }
    render(){
        return (
            <div className = "login-o-container">
                <div className = "login-i-container">
                    <div className = "login-navbar">
                        <div className = "brand-logo">
                            <img src={logo} alt="bg-image" width = "100%"/>
                        </div>
                        <div className = "nav-opt">
                            <Link to='#' className = 'text-link'><p id = 'about' onClick = {this.handleClick} className = 'active'>ABOUT</p></Link> 
                            <Link to='/login' className='text-link'><p id='login' onClick={this.handleClick}>LOGIN</p></Link>                            
                            <Link to='/signup' className='text-link'><p id='signup' onClick={this.handleClick}>SIGNUP</p></Link>
                        </div>
                    </div>
                    <div className = "login-text">
                        <h1>SmartPark</h1>
                        <h3>Parking made easy</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;