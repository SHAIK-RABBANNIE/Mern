import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    // Function to predict password strength
    const checkPasswordStrength = (password) => {
        let strength = '';
        if (password.length < 6) {
            strength = 'Weak';
        } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/)) {
            strength = 'Strong';
        } else {
            strength = 'Medium';
        }
        setPasswordStrength(strength);
    };

    // Validate name: should not exceed 12 characters and contain only letters
    const isValidName = (name) => /^[A-Za-z]{1,12}$/.test(name);

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            setIsLoading(true); // Show loading video
            setTimeout(() => {
                window.location.href = "/home"; // Redirect after video
            }, 5000); // Video duration in milliseconds
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    const handleSignup = () => {
        if (!isValidName(name)) {
            alert('Invalid name. It must be only letters and no more than 12 characters.');
            return;
        }
        if (password !== rePassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((user) => user.email === email);

        if (userExists) {
            alert('User with this email already exists.');
        } else {
            const newUser = { name, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! You can now log in.');
            setIsSignup(false); // Switch back to login form
        }
    };

    return (
        <div className="login-container">
            {isLoading ? (
                <div className="loading-video">
                    <video autoPlay>
                        <source src="https://cdn.pixabay.com/video/2022/03/13/110646-689510362_tiny.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <div className="login-box">
                    <h2>{isSignup ? 'Signup' : 'Login'}</h2>
                    {isSignup ? (
                        <>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    checkPasswordStrength(e.target.value);
                                }}
                            />
                            <div className={`strength ${passwordStrength.toLowerCase()}`}>
                                {passwordStrength && <p>Password Strength: {passwordStrength}</p>}
                            </div>
                            <input 
                                type="password" 
                                placeholder="Re-enter Password" 
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                            <button onClick={handleSignup}>Sign Up</button>
                            <button className="switch-button" onClick={() => setIsSignup(false)}>Back to Login</button>
                        </>
                    ) : (
                        <>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={handleLogin}>Login</button>
                            <button className="signup-button" onClick={() => setIsSignup(true)}>Signup</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Login;
