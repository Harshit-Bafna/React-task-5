import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (dob) {
      const birthDate = new Date(dob);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(2));
    } else {
      setAge('Please enter a valid date of birth');
    }
  };

  return (
    <div className="age-calculator">
      <div className="calculator-box">
        <h1 className="calculator-heading">Age Calculator</h1>
        <h2 className="sub-heading">Enter your date of birth</h2>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
        <div className="result">
          {age && <p>Your age is: {age} years</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
