import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>خوش آمدید!</h1>
            <p>ما خوشحالیم که شما را در اینجا می‌بینیم. لطفاً برای ادامه به صفحه عضویت بروید.</p>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>
                به صفحه عضویت بروید
            </Link>
        </div>
    );
};

export default WelcomePage;