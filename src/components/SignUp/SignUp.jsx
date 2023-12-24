import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const SignUp = () => {
    const [error, setErorr] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setErorr('');
        if (password != confirm) {
            setErorr('Your Password did not match');
            return;
        }
        else if (password.length < 6) {
            setErorr('Passowrd Must be 9 char')
        }
        form.reset();

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setErorr(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder='email'
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password</label>
                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Password</label>
                    <input
                        type="password"
                        name='confirm'
                        placeholder='Password'
                        required
                    />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>Already have an account ? <Link to="/login">Login</Link></small></p>
            <p className='error-message'>{error}</p>
        </div>
    );
};

export default SignUp;