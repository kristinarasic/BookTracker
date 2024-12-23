import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '/public/data/users.json'; 
import '/src/css/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const eventHandle = (e) => {
        e.preventDefault();

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            console.log('Logged in');
            navigate('/mainPage', { state: { currentUser: user } }); 
        } else {
            console.log('Invalid credentials');
        }
    };

    return (
        <div className="bigContainer">
        <div className="login-container">
            <h1 className="loginHeader">Welcome to the book tracker</h1>
            <h2 className="lgoinHeader2">Log in</h2>
            <form className="loginForm" onSubmit={eventHandle}>
                <input
                    className="input username usernameInput"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="input password passwordInput"

                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                    <button className="submitLogin" type="submit">Log in</button>
                <p>or <a href="" onClick={() => navigate('/signUp')} id="signUpLink">sign up</a></p>
            </form>
            </div>
            </div>
    );
};

export default Login;