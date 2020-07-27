import React from 'react';

function Input({ inputs, onInputChange, onAdd }) {
  const { name, email } = inputs;
  const f1 = () => {};

  return (
    <form onSubmit={onAdd}>
      <input
        value={name}
        onChange={onInputChange}
        name="name"
        placeholder="이름"
      />
      <input
        value={email}
        onChange={onInputChange}
        name="email"
        placeholder="이메일"
      />
      <button onClick={f1}>저장</button>
    </form>
  );
}

export default Input;
