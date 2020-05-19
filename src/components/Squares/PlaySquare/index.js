import React, { useState, useEffect } from 'react';
import css from './playSquare.module.css';

function PlaySquare({ questionObject, value }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    console.log({ questionObject: questionObject });
    console.log({ question: questionObject['question'] });
    console.log({ answer: questionObject['answer'] });
    setClicks(clicks + 1);
  }

  return (
    <div className={css.playSquare} onClick={handleClick}>
      {clicks === 0 && <h2 className={css.value}>${value}</h2>}
      {clicks === 1 && (
        <h2 className={css.question}>{questionObject['question']}</h2>
      )}
      {clicks === 2 && (
        <h2 className={css.answer}>{questionObject['answer']}</h2>
      )}
      {clicks > 2 && <h2 className={css.answer}>-</h2>}
    </div>
  );
}

export default PlaySquare;
