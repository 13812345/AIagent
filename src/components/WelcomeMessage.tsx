import React from 'react';

const WelcomeMessage: React.FC<{ username: string }> = ({ username }) => {
    return (
        <div className="welcome-message">
            <h1>خوش آمدید، {username}!</h1>
            <p>ما خوشحالیم که شما را در اینجا می‌بینیم.</p>
        </div>
    );
};

export default WelcomeMessage;