import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <h1>خوش آمدید!</h1>
            <p>ما خوشحالیم که شما را در اینجا می‌بینیم. لطفاً برای ادامه، وارد حساب کاربری خود شوید یا ثبت‌نام کنید.</p>
            <div className="button-container">
                <Link to="/login" className="btn">ورود</Link>
                <Link to="/signup" className="btn">ثبت‌نام</Link>
            </div>
        </div>
    );
};

export default WelcomePage;