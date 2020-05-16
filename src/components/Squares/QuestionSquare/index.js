import React from 'react';
import css from './questionSquare.module.css';

function QuestionSquare({ question }) {
  return (
    <div className={css.questionSquare}>
      <h3 className={css.questionText}>question</h3>
    </div>
  );
}

export default QuestionSquare;
