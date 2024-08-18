import React from 'react';
import ReactDOM from'react-dom';

const heading = React.createElement("h1", {}, "Helllo World from React! You can");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
