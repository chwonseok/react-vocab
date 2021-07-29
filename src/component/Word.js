import React, { useState } from 'react';

export default function Word({ word }) {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{word.eng}</td>
      <td>{word.kor}</td>
      <td>
        <button>meaning</button>
        <button className="btn_del">delete</button>
      </td>
    </tr>
  );
}
