import React from 'react';

interface WelcomeMessageProps {
  username: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ username }) => {
  return (
    <div>
      <h1>خوش آمدید، {username}!</h1>
      <p>ما خوشحالیم که شما را در اینجا می‌بینیم.</p>
    </div>
  );
};

export default WelcomeMessage;