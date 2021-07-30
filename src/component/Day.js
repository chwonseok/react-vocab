import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Word from './Word';

const Day = () => {
  // dummy.words
  const { day } = useParams();
  const [words, setWords] = useState([]);
  // const wordList = dummy.words.filter((word) => word.day === +day);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
