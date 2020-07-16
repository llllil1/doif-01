import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const f1 = (a) => {
    setNumber(number + a);
  };
  const f2 = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <div>현재 숫자 : {number}</div>
      <button onClick={f1}>+1</button>
      <button onClick={f2}>-1</button>
    </div>
  );
}

export default Counter;
