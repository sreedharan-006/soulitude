import React, { useState } from 'react';

const Journal = () => {
    const [entry, setEntry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ entry, date: new Date() });
        alert("Journal entry saved!");
        setEntry('');
    };

    return (
        <div className="journal-container">
            <h2>Journal Reflection</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="10"
                    cols="50"
                    placeholder="How are you feeling today?"
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                />
                <br />
                <button type="submit">Save Entry</button>
            </form>
        </div>
    );
};

export default Journal;
