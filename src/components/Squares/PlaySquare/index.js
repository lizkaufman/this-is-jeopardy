import React, { useState } from 'react';
import css from './playSquare.module.css';

import DifficultySquare from '../DifficultySquare';
import QuestionSquare from '../QuestionSquare';

function PlaySquare({ index, question }) {
  return <div className={css.playSquare}></div>;
}

export default PlaySquare;
