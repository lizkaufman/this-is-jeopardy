import React from 'react';

import css from './categorySquare.module.css';

//TODO: take in category as prop and display it in the h2

function CategorySquare({ category }) {
  return (
    <div className={css.categorySquare}>
      <h2 className={css.categoryText}>{category}</h2>
    </div>
  );
}

export default CategorySquare;
