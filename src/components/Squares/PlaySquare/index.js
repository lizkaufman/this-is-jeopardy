import React, { useState } from 'react';
import css from './playSquare.module.css';

import DifficultySquare from '../DifficultySquare';
import QuestionSquare from '../QuestionSquare';

function PlaySquare({ question }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    console.log({ question: question }); //FIXME: Undefined!
  }

  return (
    <div className={css.playSquare} onClick={handleClick}>
      <QuestionSquare />
    </div>
  );
}

export default PlaySquare;
