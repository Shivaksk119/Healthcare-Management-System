import React from 'react'; // Import React
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './App'; // Import App component
import './index.css'; // Import CSS file

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Render the App component into the root element
);
