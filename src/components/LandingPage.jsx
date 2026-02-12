import React from 'react';
import { Link } from 'react-router-dom';
// import heroImage from '../assets/landing_hero.png'; // Image generation failed
const heroImage = "https://placehold.co/600x400/1e1e1e/4bc0c0?text=Soulitude+Hero";

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="landing-hero">
                <div className="hero-content">
                    <h1>Find Your <span className="highlight">Soulitude</span></h1>
                    <p>Mindful tracking, meaningful insights, and a safe space for your thoughts. Start your journey to mental wellness today.</p>
                    <div className="cta-group">
                        <Link to="/signup" className="btn btn-primary">Get Started</Link>
                        <Link to="/signin" className="btn btn-secondary">Sign In</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Peace of mind" />
                </div>
            </header>

            <section className="features-section">
                <h2>Why Soulitude?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon">📊</div>
                        <h3>Mood Tracking</h3>
                        <p>Log your daily mood, stress, and energy levels to visualize trends over time.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">📝</div>
                        <h3>Journaling</h3>
                        <p>A private space to reflect on your day with optional prompts to guide you.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">🧠</div>
                        <h3>AI Insights</h3>
                        <p>Get personalized insights based on your sentiment and behavioral patterns.</p>
                    </div>
                </div>
            </section>

            <footer className="landing-footer">
                <p>&copy; {new Date().getFullYear()} Soulitude. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
