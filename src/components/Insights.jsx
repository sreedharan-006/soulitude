import React from 'react';

const Insights = () => {
    // Placeholder data simulating AI analysis
    const insights = [
        { title: "Sentiment Trend", description: "Your journal entries show a positive trend this week." },
        { title: "Mood Correlation", description: "Higher stress on Thursdays correlates with lower sleep." },
        { title: "Suggestion", description: "Try a 5-minute breathing exercise before bed to improve sleep quality." }
    ];

    return (
        <div className="insights-container">
            <h2>AI Insights</h2>
            <ul>
                {insights.map((insight, index) => (
                    <li key={index} className="insight-card">
                        <h3>{insight.title}</h3>
                        <p>{insight.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Insights;
