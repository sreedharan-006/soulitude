import React, { useState } from 'react';

const CheckIn = () => {
    const [mood, setMood] = useState(5);
    const [stress, setStress] = useState(5);
    const [energy, setEnergy] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ mood, stress, energy, date: new Date() });
        alert("Check-in saved!");
    };

    return (
        <div className="check-in-container">
            <h2>Daily Check-In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Mood (1-10):</label>
                    <input
                        type="range"
                        min="1" max="10"
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                    />
                    <span>{mood}</span>
                </div>
                <div>
                    <label>Stress (1-10):</label>
                    <input
                        type="range"
                        min="1" max="10"
                        value={stress}
                        onChange={(e) => setStress(e.target.value)}
                    />
                    <span>{stress}</span>
                </div>
                <div>
                    <label>Energy (1-10):</label>
                    <input
                        type="range"
                        min="1" max="10"
                        value={energy}
                        onChange={(e) => setEnergy(e.target.value)}
                    />
                    <span>{energy}</span>
                </div>
                <button type="submit">Save Check-In</button>
            </form>
        </div>
    );
};

export default CheckIn;
