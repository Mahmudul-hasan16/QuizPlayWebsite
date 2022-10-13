import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Question = ({ question }) => {
    const handleClick = (option) => {
        if (option === question.correctAnswer) {
            toast.success('Your are correct!')
        } else {
            toast.error('You are wrong!')
        }
    }
    const [show, setShow] = useState(false)
    const handleAnswer = () => { return setShow(!show) };
    return (
        <div className='bg-gray-100 p-5 m-5 relative'>
            <h3 className='text-2xl font-bold'>Q.{question.question.replace(/(<([^>]+)>)/ig, '')}</h3>
            <div className='md:grid grid-cols-2 gap-3 m-4'>
                {
                    question.options.map(option => <div key={question.options.indexOf(option)} onClick={() => handleClick(option)} className='p-3 shadow-sm border-2 hover:bg-blue-400 hover:text-white cursor-pointer'>{option}</div>)
                }
            </div>
            <div className='absolute top-2 right-2 hover:text-blue-400 ' onClick={() => handleAnswer()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

            </div>
            {
                show ? <div className='p-2 bg-green-400'> <span className='font-bold'>Correct Answer: </span> {question.correctAnswer}</div> : ""
            }
        </div>
    );
};

export default Question;