// src/App.js
import React from 'react';
import Form from './Form';
import './Form.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <div className="form-container">
        <h1>Students Form</h1>
        <Form />
      </div>
      <div className="output-container">
        {/* Output will be displayed here */}
      </div>
    </div>
  );
}

export default App;
