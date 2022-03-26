import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='qaDiv'>
            <h1>How React Works?</h1>
            <p>ReactJS is one of the most popular JavaScript libraries for mobile and web applications development. React saves the tree. The tree is able to perform practical calculations on nodes.

            Think of HTML code as a tree. In fact, this is exactly how the browser handles DOM (your HTML provided in the browser). React lets you successfully rebuild DOM in JavaScript and only compress those DOM changes that actually take place.</p>

            <h1>Props VS State</h1>
 
                <ul>Props are read only but state changes and it is asynchronous.</ul>
                <ul>Props are immutable but state is mutable.</ul>
                <ul>Props can be accessed by child component but State can not accessed by child components.</ul>
                <ul>Props make components reusable but state can not make components reusable.</ul>
                <ul>Stateless component can have props but stateless component can not have state.</ul>

        </div>
    );
};

export default Questions;