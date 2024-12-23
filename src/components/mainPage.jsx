import React from 'react';
import { useLocation } from 'react-router-dom';
import '/src/css/mainPage.css'

const MainPage = () => {
    const location = useLocation();
    const currentUser = location.state?.currentUser;


    if (!currentUser) {
        return <div>Please log in to see this page.</div>;
    }
    return (
        <div className="main-page-container">
            <h1>Welcome, {currentUser.username}!</h1>
            <div className="book-content">
                {currentUser.role === 1 ? (<h1>Hello</h1>) : (<h1>Goodbye!</h1>)}
                <p>This is some text inside the book.</p>
                <p>Feel free to customize it further.</p>
            </div>
        </div>
    );


};

export default MainPage;
