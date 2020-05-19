import React from 'react';
import css from './difficultySquare.module.css';

function DifficultySquare({ value }) {
  return (
    <div className={css.difficultySquare}>
      <h2 className={css.difficultyNumber}>${value}</h2>
    </div>
  );
}

export default DifficultySquare;
