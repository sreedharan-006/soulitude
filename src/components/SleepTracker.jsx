import React, { useState } from 'react';
import { SleepIcon } from './Icons';
import { Line } from 'react-chartjs-2';

const SleepTracker = () => {
    const [bedtime, setBedtime] = useState('');
    const [wakeTime, setWakeTime] = useState('');
    const [sleepQuality, setSleepQuality] = useState(3); // 1-5 rating
    const [logs, setLogs] = useState([
        { date: 'Mon', duration: 7.5, quality: 4 },
        { date: 'Tue', duration: 6.0, quality: 3 },
        { date: 'Wed', duration: 8.0, quality: 5 },
        { date: 'Thu', duration: 7.0, quality: 4 },
    ]);

    const calculateDuration = () => {
        if (!bedtime || !wakeTime) return 0;

        const start = new Date(`2000-01-01T${bedtime}`);
        const end = new Date(`2000-01-01T${wakeTime}`);

        // Handle overnight sleep (e.g. 11 PM to 7 AM)
        if (end < start) {
            end.setDate(end.getDate() + 1);
        }

        const diffMs = end - start;
        const diffHrs = diffMs / (1000 * 60 * 60);
        return Math.round(diffHrs * 10) / 10;
    };

    const handleLogSleep = (e) => {
        e.preventDefault();
        const duration = calculateDuration();
        if (duration <= 0) {
            alert("Please check your times.");
            return;
        }

        const newLog = {
            date: 'Today',
            duration: duration,
            quality: sleepQuality
        };

        setLogs([...logs, newLog]);
        alert(`Sleep logged: ${duration} hours`);
        setBedtime('');
        setWakeTime('');
    };

    // Chart Data
    const chartData = {
        labels: logs.map(l => l.date),
        datasets: [
            {
                label: 'Hours Slept',
                data: logs.map(l => l.duration),
                borderColor: '#4bc0c0',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.3
            },
            {
                label: 'Quality (1-5)',
                data: logs.map(l => l.quality),
                borderColor: '#FFCE56',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                yAxisID: 'y1',
                tension: 0.3
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Sleep Trends' }
        },
        scales: {
            y: {
                title: { display: true, text: 'Hours' },
                min: 0,
                max: 12
            },
            y1: {
                position: 'right',
                title: { display: true, text: 'Quality' },
                min: 0,
                max: 5,
                grid: { drawOnChartArea: false }
            }
        }
    };

    return (
        <div className="sleep-container">
            <div className="sleep-header">
                <div className="icon-wrapper"><SleepIcon /></div>
                <h2>Sleep Cycle Tracker</h2>
            </div>

            <div className="sleep-content-grid">
                <div className="log-form-card">
                    <h3>Log Last Night's Sleep</h3>
                    <form onSubmit={handleLogSleep}>
                        <div className="form-group">
                            <label>Bedtime</label>
                            <input
                                type="time"
                                value={bedtime}
                                onChange={(e) => setBedtime(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Wake Up Time</label>
                            <input
                                type="time"
                                value={wakeTime}
                                onChange={(e) => setWakeTime(e.target.value)}
                                required
                            />
                        </div>

                        {bedtime && wakeTime && (
                            <div className="duration-preview">
                                Estimated Duration: <strong>{calculateDuration()} hours</strong>
                            </div>
                        )}

                        <div className="form-group">
                            <label>Sleep Quality (1-5)</label>
                            <div className="quality-selector">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <button
                                        key={num}
                                        type="button"
                                        className={`quality-btn ${sleepQuality === num ? 'selected' : ''}`}
                                        onClick={() => setSleepQuality(num)}
                                    >
                                        {num === 5 ? '😴' : num === 1 ? '😫' : num}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button type="submit" className="btn-log-sleep">Log Sleep</button>
                    </form>
                </div>

                <div className="chart-card">
                    <Line data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default SleepTracker;
