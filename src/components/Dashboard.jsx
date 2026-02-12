import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Weekly Mood Trends',
        },
    },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const data = {
    labels,
    datasets: [
        {
            label: 'Mood',
            data: [7, 6, 8, 5, 6, 9, 8],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
            label: 'Stress',
            data: [3, 4, 2, 5, 4, 1, 2],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2>Wellness Dashboard</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Line options={options} data={data} />
            </div>
        </div>
    );
};

export default Dashboard;
