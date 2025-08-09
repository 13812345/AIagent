import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <h1>خوش آمدید!</h1>
            <p>ما خوشحالیم که شما را در اینجا می‌بینیم. لطفاً برای ادامه به صفحه عضویت بروید.</p>
            <Link to="/signup" className="signup-link">به صفحه عضویت بروید</Link>
        </div>
    );
};

export default WelcomePage;