import React, { useState, useRef } from 'react';
import './App.css';
// import Hello from './components/Hello';
// import Counter from './components/Counter';
// import Wrapper from './components/Wrapper';
import Input from './components/Input';
import UserList from './components/UserList';

function App() {
  const nextId = useRef(5);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });

  const [users, setUsers] = useState([
    { id: '1', name: 'js1', email: 'jslim1@tnctec.co.kr' },
    { id: '2', name: 'js2', email: 'jslim2@tnctec.co.kr' },
    { id: '3', name: 'js3', email: 'jslim3@tnctec.co.kr' },
    { id: '4', name: 'js4', email: 'jslim4@tnctec.co.kr' },
  ]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onAdd = (e) => {
    e.preventDefault();
    const { name, email } = inputs;
    setUsers(
      users.concat({
        id: nextId.current,
        name,
        email,
      }),
    );
    setInputs({
      name: '',
      email: '',
    });
    nextId.current += 1;
  };

  return (
    <>
      <Input inputs={inputs} onInputChange={onInputChange} onAdd={onAdd} />
      <UserList users={users} />
    </>
  );
}

export default App;
