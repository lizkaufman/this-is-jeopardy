import React, { useEffect, useState } from 'react';
import css from './boardColumn.module.css';
import apiUrl from '../../libs/config';

import CategorySquare from '../Squares/CategorySquare';
import PlaySquare from '../Squares/PlaySquare';

function BoardColumn() {
  const [categoryId, setCategoryId] = useState();
  const [category, setCategory] = useState('');
  const [cluesBank, setCluesBank] = useState([]);

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
        const title = data.title;
        console.log({ title: title });
        setCategory(title.toUpperCase());
        const clues = data.clues;
        console.log({ clues: clues });
        setCluesBank(clues);
      });
  }, [categoryId]);

  return (
    <div className={css.boardColumn}>
      <CategorySquare category={category} />
      <PlaySquare cluesBank={cluesBank} />
    </div>
  );
}

export default BoardColumn;
