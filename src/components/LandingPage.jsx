import React from 'react';
import { Link } from 'react-router-dom';
import { HeroIllustration, MoodIcon, JournalIcon, BrainIcon, ArrowRight, ChatIcon, MeditationIcon, SleepIcon } from './Icons';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="landing-hero">
                <div className="hero-content">
                    <h1>Your Personal Space for<br />
                        <span className="highlight">Mental Wellness & Growth.</span></h1>
                    <p>Experience peace with our AI Companion, guided meditations, and sleep tracking. Anonymous. Private. Always there for you.</p>
                    <div className="cta-group">
                        <Link to="/signup" className="btn btn-primary">Start Your Journey <ArrowRight /></Link>
                        <Link to="/signin" className="btn btn-secondary">Login</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <HeroIllustration />
                </div>
            </header>

            <section className="marquee-section">
                <div className="marquee-content">
                    <span className="marquee-item">Mindfulness</span> •
                    <span className="marquee-item">Sleep Health</span> •
                    <span className="marquee-item">Emotional Support</span> •
                    <span className="marquee-item">Self Care</span> •
                    <span className="marquee-item">Growth</span> •
                    <span className="marquee-item">Mindfulness</span> •
                    <span className="marquee-item">Sleep Health</span> •
                    <span className="marquee-item">Emotional Support</span> •
                    <span className="marquee-item">Self Care</span> •
                    <span className="marquee-item">Growth</span> •
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">01</div>
                        <div className="step-content">
                            <h3>Create Account</h3>
                            <p>Sign up securely with phone verification. Your data is private and protected.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <div className="step-content">
                            <h3>Choose Your Path</h3>
                            <p>Talk to our AI companion, start a meditation session, or log your sleep.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <div className="step-content">
                            <h3>Track Progress</h3>
                            <p>Monitor your mood, sleep, and well-being trends over time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <h2>Our Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon"><ChatIcon /></div>
                        <h3>AI Companion</h3>
                        <p>24/7 empathetic support. Chat about your feelings in a judgment-free zone.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon"><MeditationIcon /></div>
                        <h3>Guided Meditation</h3>
                        <p>Reduce stress with breathing exercises, body scans, and mindful focus sessions.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon"><SleepIcon /></div>
                        <h3>Sleep Tracker</h3>
                        <p>Understand your sleep patterns and improve your rest quality.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon"><MoodIcon /></div>
                        <h3>Mood Tracking</h3>
                        <p>Log your daily mood and identify patterns to better understand yourself.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon"><JournalIcon /></div>
                        <h3>Private Journal</h3>
                        <p>A secure space to write down your thoughts and reflect on your journey.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon"><BrainIcon /></div>
                        <h3>Wellness Insights</h3>
                        <p>Visualize your progress with intuitive charts and data summaries.</p>
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
