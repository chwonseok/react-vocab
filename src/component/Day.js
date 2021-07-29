import React from 'react';
import dummy from '../db/data.json';
import { useParams } from 'react-router';
import Word from './Word';

const Day = () => {
  // dummy.words
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === +day);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
