import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Signup.css'

const Signup = () => {
    const [error,setError] = useState(null)

    const {createUser} = useContext(AuthContext)

    const handleSubmit = (event) => {
        
    
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email,password,confirmPassword);
        
        if(password.length < 6){
            setError('Password should be atleast 6 characters')
        }

        if(password !== confirmPassword){
            setError('Password not matched')
        }


        createUser(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
            alert('User Created Successfully')
        })
        .catch(error => {
            console.error("Error: ",error)
        })



        form.reset();
    }
    
    return (
        <div>
            <div className="form-container">
                <div className="form-details">
                    <h2 className='form-title'>Sign Up</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder='Email' required/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder='Password' required/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input type="password" name="confirm" placeholder='Confirm Password' required/>
                        </div>

                        <span className='text-danger'>{error}</span>

                        <input className='btn-sign-up' type="submit" value="Sign Up" />
                        <p className='already-account'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;