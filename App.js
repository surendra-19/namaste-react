import React from 'react';
import ReactDOM from 'react-dom/client';

const newELement = <h1>This is JSX! from element</h1>
const App = () => (
    <>
        {newELement}
        <h1>This is inside from component</h1>
    </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);