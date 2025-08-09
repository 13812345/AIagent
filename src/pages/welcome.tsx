import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome: React.FC = () => {
    return (
        <div className="welcome-container">
            <h1>خوش آمدید به صفحه عضویت</h1>
            <p>برای ادامه، لطفاً اطلاعات خود را وارد کنید.</p>
            <Link to="/signup" className="signup-link">به صفحه عضویت بروید</Link>
        </div>
    );
};

export default Welcome;