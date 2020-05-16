import React, { useEffect, useState } from 'react';
import css from './boardColumn.module.css';
import apiUrl from '../../libs/config';

import CategorySquare from '../Squares/CategorySquare';
import PlaySquare from '../Squares/PlaySquare';

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
    setQuestionSet(chooseClues());
  }, [cluesBank]);

  function randomize(max) {
    return Math.floor(Math.random() * max);
  }

  function chooseClues() {
    //use .map to sort into separate arrays of difficulty levels
    //then randomly choose 1 q from each difficulty level array
    //then sort these by order of difficulty
    //TODO: will think of how to get around the other issues re: difficulty/rounds in next iterations - just starting w/ getting them in order
    let cluesArray = [];
    if (cluesBank.length === 5) {
      cluesArray.push(cluesBank);
    } else {
      //TODO: Old way resulted in duplicates, and checking for dupes each time is hard. New plan! Shuffle order of cluesBank array, then push the first five objects into cluesArray.
    }
    console.log({ cluesArray: cluesArray });
    return cluesArray;
  }

  return (
    <div className={css.boardColumn}>
      <CategorySquare category={category} />
      <PlaySquare question={questionSet[0]} />
      <PlaySquare question={questionSet[1]} />
      <PlaySquare question={questionSet[2]} />
      <PlaySquare question={questionSet[3]} />
      <PlaySquare question={questionSet[4]} />
    </div>
  );
}

export default BoardColumn;
