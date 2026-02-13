import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneIcon } from './Icons';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const phoneRef = useRef();
    const otpRef = useRef();

    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1); // 1: Details, 2: OTP
    const navigate = useNavigate();

    async function handleSendCode(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        if (!phoneRef.current.value) {
            return setError("Please enter a phone number");
        }

        setError('');
        setLoading(true);

        // Simulate sending OTP
        setTimeout(() => {
            setLoading(false);
            setStep(2);
            alert("Mock OTP sent: 123456");
        }, 1000);
    }

    async function handleVerifyAndSignup(e) {
        e.preventDefault();

        if (otpRef.current.value !== "123456") {
            return setError("Invalid OTP code. Try 123456.");
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch (err) {
            setError("Failed to create an account: " + err.message);
        }
        setLoading(false);
    }

    return (
        <div className="auth-container">
            <div className="card">
                <h2>{step === 1 ? 'Create Account' : 'Verify Phone'}</h2>
                {error && <div className="alert error">{error}</div>}

                {step === 1 ? (
                    <form onSubmit={handleSendCode}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" ref={emailRef} required placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '10px', color: '#aaa' }}><PhoneIcon /></span>
                                <input
                                    type="text"
                                    ref={phoneRef}
                                    required
                                    placeholder="+1 (555) 000-0000"
                                    style={{ paddingLeft: '40px', width: '100%', boxSizing: 'border-box' }}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" ref={passwordRef} required placeholder="At least 6 characters" />
                        </div>
                        <div className="form-group">
                            <label>Password Confirmation</label>
                            <input type="password" ref={passwordConfirmRef} required placeholder="Confirm password" />
                        </div>
                        <button disabled={loading} type="submit">
                            {loading ? 'Sending Code...' : 'Send Verification Code'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyAndSignup}>
                        <div className="form-group">
                            <label>Enter Verification Code</label>
                            <input
                                type="text"
                                ref={otpRef}
                                required
                                placeholder="123456"
                                style={{ letterSpacing: '0.5em', textAlign: 'center', fontSize: '1.5rem', width: '100%' }}
                            />
                            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem', textAlign: 'center' }}>
                                (Use 123456 for demo)
                            </p>
                        </div>
                        <button disabled={loading} type="submit">
                            {loading ? 'Verifying...' : 'Verify & Create Account'}
                        </button>
                        <button
                            type="button"
                            className="btn-secondary"
                            style={{ width: '100%', marginTop: '1rem' }}
                            onClick={() => setStep(1)}
                        >
                            Back to Details
                        </button>
                    </form>
                )}

                <div className="auth-footer">
                    Already have an account? <Link to="/signin">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
