import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);
    const { name, questions } = quizData.data
    return (
        <div>
            <h1 className='p-5 text-3xl text-center font-bold bg-blue-400  text-white'>{name} Question</h1>
            {
                questions.map(question => <Question key={question.id} question={question} />)
            }
        </div>
    );
};

export default Quiz;