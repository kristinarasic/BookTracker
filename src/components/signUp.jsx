import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/css/signUp.css';
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        console.log(`New user registered: ${username}`);

        navigate('/');
    };

    return (
        <div className="signup-container" id="signup-container">
            <h1 className="loginHeader">Welcome to the book tracker</h1>
            <h1 id="signup-title">Sign Up</h1>
            <form onSubmit={handleSignUp} id="signup-form">
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username-input"
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password-input"
                />
                <button type="submit" id="signup-button">Sign Up</button>
                <p>Already have an account?  <a href="" onClick={() => navigate('/')} id="signUpLink">Log in</a></p>
            </form>
        </div>
    );
};

export default SignUp;
