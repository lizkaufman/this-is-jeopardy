import React, { useEffect, useState } from 'react';
import css from './boardColumn.module.css';
import apiUrl from '../../libs/config';

import CategorySquare from '../Squares/CategorySquare';
import PlaySquare from '../Squares/PlaySquare';

function BoardColumn() {
  const [categoryId, setCategoryId] = useState();
  const [category, setCategory] = useState('');
  const [cluesBank, setCluesBank] = useState([]);
  const [questionSet, setQuestionSet] = useState(['', '', '', '', '']);

  useEffect(() => {
    //potential categories have max id of 18418, so this chooses a random category id under or equal to that
    const randCatId = Math.floor(Math.random() * 18419);
    console.log(randCatId);
    setCategoryId(randCatId);
  }, []);

  useEffect(() => {
    //does a fetch for clues w/ that category id
    fetch(apiUrl + `category?id=${categoryId}`, { cache: 'no-store' })
      .then((response) => response.json())
      .then((data) => {
        console.log({ categoryData: data });
        setCategory(data.title.toUpperCase());
        setCluesBank(data.clues);
      });
  }, [categoryId]);

  return (
    <div className={css.boardColumn}>
      <CategorySquare category={category} />
      <PlaySquare index={0} question={questionSet[0]} />
      <PlaySquare index={1} question={questionSet[1]} />
      <PlaySquare index={2} question={questionSet[2]} />
      <PlaySquare index={3} question={questionSet[3]} />
      <PlaySquare index={4} question={questionSet[4]} />
    </div>
  );
}

export default BoardColumn;
