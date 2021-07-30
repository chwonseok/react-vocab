import React, { useState } from 'react';

export default function Word({ word }) {
  const [isShowed, setIsShowed] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const showHandler = () => {
    setIsShowed(!isShowed);
  };

  const doneHandler = () => {
    setIsDone(!isDone);
  };

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input onChange={doneHandler} type="checkbox" checked={isDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShowed && word.kor}</td>
      <td>
        <button onClick={showHandler}>뜻 {isShowed ? '보기' : '숨기기'}</button>
        <button className="btn_del">delete</button>
      </td>
    </tr>
  );
}
