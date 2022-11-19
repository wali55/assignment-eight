import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className="answer">
            <h3>How React Works?</h3>
            <p>The browser dom is slow. So, to make it faster React implements a virtual DOM that is basically a dom tree representation in JavaScript. So, when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, virtual DOM are plain objects and are cheap to create. JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
            <h3>Difference between Props and State in React?</h3>
            <p>(1) Props are read only. State changes can be asynchronous. (2) Pros are immutable. State is mutable. (3) Props allow us to pass data from one component to other components. State holds information about the components.
</p>
        </div>
    );
};

export default Answer;