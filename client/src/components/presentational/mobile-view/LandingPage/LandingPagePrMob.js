import React, {Component} from 'react';
import logo from '../../../../images/logo.svg';
import './LandingPagePrMob.css';
import { Link } from 'react-router-dom';
class LandingPagePrMob extends Component{
    render(){
        return (
            <div className = 'lp-o-container-m'>
                <div className='lp-i-container-m'>
                    <div className='lp-brand-name-m'>
                        <h1>SmartPark</h1>
                    </div>
                    <div className='lp-auth-container-m'>
                        <div className='lp-login'>
                            <Link to = '/login'>
                                <h3>LOGIN</h3>                            
                            </Link>
                        </div>
                        <div className='lp-signup'>
                            <Link to='/signup'>
                                <h3>SIGN UP</h3>
                            </Link>
                        </div>
                    </div>
                    <div className='lp-footer-m'>
                        <div className='lp-brand-logo-m'>
                            <img src={logo} alt=""/>
                        </div>
                        <div className='lp-brand-moto-m'>
                            <p>Parking made Easy</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPagePrMob;