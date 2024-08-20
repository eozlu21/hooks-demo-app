import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../custom/Button';

function UseStateObjectsDemo() {
  const [user, setUser] = useState({
    name: 'Initial Name',
    surname: 'Initial Surname',
  });
  const navigate = useNavigate();

  const handleNameChange = () => {
    const newName = prompt('Enter a new name:');
    setUser({ ...user, name: newName });
  };

  const handleSurnameChange = () => {
    const newSurname = prompt('Enter a new surname:');
    setUser({ ...user, surname: newSurname });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '300px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2>useState Demo</h2>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <Button onClick={handleNameChange}>Change Name</Button>
      <br />
      <Button onClick={handleSurnameChange}>Change Surname</Button>
      <br />
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
}

export default UseStateObjectsDemo;
