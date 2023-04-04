import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        {
            name: "Alice",
            Physics: 90,
            Chemistry: 85,
            Math: 95
        },
        {
            name: "Bob",
            Physics: 80,
            Chemistry: 75,
            Math: 85
        },
        {
            name: "Charlie",
            Physics: 70,
            Chemistry: 80,
            Math: 90
        },
        {
            name: "David",
            Physics: 85,
            Chemistry: 90,
            Math: 80
        },
        {
            name: "Emma",
            Physics: 95,
            Chemistry: 85,
            Math: 95
        },
        {
            name: "Frank",
            Physics: 75,
            Chemistry: 80,
            Math: 75
        },
        {
            name: "Grace",
            Physics: 90,
            Chemistry: 85,
            Math: 90
        },
        {
            name: "Henry",
            Physics: 80,
            Chemistry: 90,
            Math: 80
        },
        {
            name: "Isabella",
            Physics: 85,
            Chemistry: 95,
            Math: 85
        },
        {
            name: "Jack",
            Physics: 70,
            Chemistry: 80,
            Math: 75
        },
        {
            name: "Katherine",
            Physics: 95,
            Chemistry: 90,
            Math: 95
        },
        {
            name: "Lucas",
            Physics: 80,
            Chemistry: 75,
            Math: 80
        }
    ];

    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={students}
            >
                <CartesianGrid></CartesianGrid>
                <Line dataKey="Physics"></Line>
                <Line dataKey="Chemistry" stroke='#8884d8'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;