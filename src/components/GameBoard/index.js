import React, { useState, useEffect } from 'react';
import css from './gameBoard.module.css';
import apiUrl from '../../libs/config';

import BoardColumn from '../BoardColumn';

function GameBoard() {
  return (
    <div className={css.gameBoard}>
      <BoardColumn />
      {/* <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn /> */}
    </div>
  );
}

export default GameBoard;