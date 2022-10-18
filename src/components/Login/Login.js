import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Login.css'

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
        loginUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace:true});
        })
        .catch(error => {
            alert("Login credentials wrong")
        })

        

    }   



    return (
        <div>
            <div className="form-container">
                <div className="form-details">
                    <h2 className='form-title'>Login</h2>

                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder='Email' required />
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder='Password' required />
                        </div>

                        <input className='btn-sign-up' type="submit" value="Login" />
                        <p className='already-account'><small>New to Ema-John? <Link to='/signup'>Create New Account</Link></small></p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;