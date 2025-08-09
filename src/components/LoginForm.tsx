import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('لطفا همه فیلدها را پر کنید');
            return;
        }
        // Add your login logic here
        console.log('Logging in with:', { email, password });
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">ایمیل:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">رمز عبور:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">ورود</button>
        </form>
    );
};

export default LoginForm;