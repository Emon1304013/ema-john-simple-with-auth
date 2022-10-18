import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Signup.css'

const Signup = () => {
    
    return (
        <div>
            <div className="form-container">
                <div className="form-details">
                    <h2 className='form-title'>Sign Up</h2>

                    <form className=''>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='Email' required/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" placeholder='Password' required/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input type="password" name="confirm" id="" placeholder='Confirm Password' required/>
                        </div>

                        <input className='btn-sign-up' type="submit" value="Sign Up" />
                        <p className='already-account'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;