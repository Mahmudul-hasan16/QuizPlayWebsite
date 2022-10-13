import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Statistics = () => {
    const quizData = useLoaderData();
    console.log(quizData.data)
    return (
        <div className='m-10 flex flex-col justify-center items-center'>
            <h1 className='text-3xl m-5'>Quiz question Total statistics</h1>
            <LineChart width={730} height={250} data={quizData.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Statistics;