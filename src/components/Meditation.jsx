import React, { useState, useEffect } from 'react';
import { MeditationIcon } from './Icons';

const Meditation = () => {
    const [activeTimer, setActiveTimer] = useState(null); // 'breathing', 'focus', 'scan' or null
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const exercises = [
        {
            id: 'breathing',
            title: 'Deep Breathing',
            duration: 180, // 3 minutes
            description: 'Focus on your breath. Inhale for 4 seconds, hold for 4, exhale for 4.',
            color: '#4bc0c0'
        },
        {
            id: 'focus',
            title: 'Mindful Focus',
            duration: 300, // 5 minutes
            description: 'Close your eyes and focus on the sounds around you. Let thoughts pass like clouds.',
            color: '#FF6384'
        },
        {
            id: 'scan',
            title: 'Body Scan',
            duration: 600, // 10 minutes
            description: 'Slowly bring attention to each part of your body, from toes to head, releasing tension.',
            color: '#36A2EB'
        }
    ];

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(time => time - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            if (activeTimer) {
                // Timer finished
                // Could play a sound here
            }
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, activeTimer]);

    const startExercise = (exercise) => {
        setActiveTimer(exercise.id);
        setTimeLeft(exercise.duration);
        setIsActive(true);
    };

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        const exercise = exercises.find(e => e.id === activeTimer);
        if (exercise) setTimeLeft(exercise.duration);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="meditation-container">
            <div className="meditation-header">
                <div className="icon-wrapper"><MeditationIcon /></div>
                <h2>Mindfulness & Meditation</h2>
            </div>

            {activeTimer ? (
                <div className="timer-display">
                    <h3>{exercises.find(e => e.id === activeTimer)?.title}</h3>
                    <div className="time-large">{formatTime(timeLeft)}</div>
                    <div className="timer-controls">
                        <button onClick={toggleTimer} className={isActive ? 'btn-pause' : 'btn-start'}>
                            {isActive ? 'Pause' : 'Start'}
                        </button>
                        <button onClick={resetTimer} className="btn-reset">Reset</button>
                        <button onClick={() => { setActiveTimer(null); setIsActive(false); }} className="btn-back">
                            Change Exercise
                        </button>
                    </div>
                    <p className="instruction">{exercises.find(e => e.id === activeTimer)?.description}</p>
                </div>
            ) : (
                <div className="exercises-grid">
                    {exercises.map(exercise => (
                        <div key={exercise.id} className="exercise-card" onClick={() => startExercise(exercise)}>
                            <div className="duration-badge">{Math.floor(exercise.duration / 60)} min</div>
                            <h3>{exercise.title}</h3>
                            <p>{exercise.description}</p>
                            <button className="btn-start-exercise">Begin</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Meditation;
