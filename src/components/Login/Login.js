import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const handleLogin = () => {
        
    }



    return (
        <div>
            <div className="form-container">
                <div className="form-details">
                    <h2 className='form-title'>Login</h2>

                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='Email' required />
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" placeholder='Password' required />
                        </div>

                        <input className='btn-sign-up' type="submit" value="Sign Up" />
                        <p className='already-account'><small>New to Ema-John? <Link to='/signup'>Create New Account</Link></small></p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;