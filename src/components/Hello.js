import React, { useState } from 'react';

function Hello({ isValid }) {
  const [text, setText] = useState('DDD');
  console.log(isValid);
  const onClickButton = () => {
    setText('123');
  };
  const style1 = { coler: 'red' };
  return (
    <>
      {isValid && <div>안녕</div>}
      <span style={style1}>{text}</span>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
}

export default Hello;
