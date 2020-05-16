import React, { useState, useEffect } from 'react';
import css from './playSquare.module.css';

import DifficultySquare from '../DifficultySquare';
import QuestionSquare from '../QuestionSquare';

function PlaySquare({ question }) {
  const [clicks, setClicks] = useState(0);
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [difficulty, setDifficulty] = useState(0);

  function handleClick() {
    console.log({ questionObject: question });
    console.log({ question: question['question'] });
  }

  //   useEffect(() => {
  //     setQuestionText(question['question']);
  //   }, [question]);

  return (
    <div className={css.playSquare} onClick={handleClick}>
      <QuestionSquare question={questionText} answer={answerText} />
    </div>
  );
}

export default PlaySquare;
