import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/css/signUp.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const navigate = useNavigate();
    const API_URL = 'http://localhost:4000/users';

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAllUsers(data);
            } catch (error) {
                console.error(`Failed to fetch users: ${error.message}`);
            }
        };

        fetchUsers();
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log(`New user registered: ${username}`);

        const userExists = allUsers.some((u) => u.username === username);
        if (userExists) {
            alert('Username already exists');
            return;
        }

        try {
            const role = 1;
            const nextId = allUsers.length > 0 ? Math.max(...allUsers.map(u => u.id)) + 1 : 0;

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role, username, password, id: nextId }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const newUser = await response.json();
            setAllUsers([...allUsers, newUser]);
            e.target.reset();
        } catch (error) {
            console.error(`Failed to sign up user: ${error.message}`);
        }
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
                <button
                    type="submit"
                    id="signup-button"
                    disabled={username.trim() === '' || password.trim() === ''}
                >
                    Sign Up
                </button>
                <p>
                    Already have an account?{' '}
                    <a href="#" onClick={() => navigate('/')} id="signUpLink">
                        Log in
                    </a>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
