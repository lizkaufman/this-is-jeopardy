import React, { useEffect, useState } from 'react';
import css from './boardColumn.module.css';
import apiUrl from '../../libs/config';

import CategorySquare from '../Squares/CategorySquare';
import PlaySquare from '../Squares/PlaySquare';

const values = ['200', '400', '600', '800', '1000'];

function BoardColumn() {
  const [categoryId, setCategoryId] = useState();
  const [category, setCategory] = useState('');
  const [cluesBank, setCluesBank] = useState([]);
  const [questionSet, setQuestionSet] = useState([]);

  useEffect(() => {
    //potential categories have max id of 18418, so this chooses a random category id under or equal to that
    setCategoryId(randomize(18419));
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

  useEffect(() => {
    //when the cluesBank is populated, sets the questions to send down to the playSquares
    //use .map to sort into separate arrays of difficulty levels
    //then randomly choose 1 q from each difficulty level array
    //then sort these by order of difficulty
    //TODO: will think of how to get around the other issues re: difficulty/rounds in next iterations - just starting w/ getting them in order
    let cluesArray = [];
    let shuffledCluesBank = cluesBank.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 5; i++) {
      cluesArray.push(shuffledCluesBank[i]);
    }
    console.log({ cluesArray: cluesArray });
    setQuestionSet(cluesArray);
  }, [cluesBank]);

  function randomize(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className={css.boardColumn}>
      <CategorySquare category={category} />
      {questionSet !== [] && (
        <>
          <PlaySquare questionObject={questionSet[0]} value={values[0]} />
          <PlaySquare questionObject={questionSet[1]} value={values[1]} />
          <PlaySquare questionObject={questionSet[2]} value={values[2]} />
          <PlaySquare questionObject={questionSet[3]} value={values[3]} />
          <PlaySquare questionObject={questionSet[4]} value={values[4]} />
        </>
      )}
    </div>
  );
}

export default BoardColumn;
