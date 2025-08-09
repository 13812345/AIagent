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
        // Here you would typically handle the login logic, e.g., API call
        console.log('Logging in with:', { email, password });
        setError('');
    };

    return (
        <div className="login-form">
            <h2>ورود به حساب کاربری</h2>
            {error && <p className="error">{error}</p>}
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
                <button type="submit">ورود</button>
            </form>
        </div>
    );
};

export default LoginForm;