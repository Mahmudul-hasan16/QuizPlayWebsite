import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='p-5 text-3xl text-center font-bold bg-blue-400  text-white'>Blog post</h1>
            <div className='p-5'>
                <h1 className='my-2 text-2xl font-bold'>What are purposes of react router?</h1>
                <p>React router is a library of routing react. Its normally make navigation more comfortable. It allows changing the browser URL, and keeps the UI in sync with the URL. It keeps track of location. Thats why we can change location easily.This component is what we want to use in most cases for most applications, because we have multiple routes and multiple plate pages in our app but we only want to show one page at a time.</p>
            </div>
            <div className='p-5'>
                <h1 className='my-2 text-2xl font-bold'>How context api work?</h1>
                <p>With context api we can use any data form any location without props drilling. We can basically control data access.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>

            </div>
            <div className='p-5'>
                <h1 className='my-2 text-2xl font-bold'>What is useRef?</h1>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. It return multiple object.These values are accessed from the current property of the returned object. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;