import React from 'react';
import css from './difficultySquare.module.css';

function DifficultySquare() {
  return (
    <div className={css.difficultySquare}>
      <h2 className={css.difficultyNumber}>$</h2>
    </div>
  );
}

export default DifficultySquare;
