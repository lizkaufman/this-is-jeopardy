import React, { useState, useEffect } from 'react';
import css from './gameBoard.module.css';

import BoardColumn from '../BoardColumn';

//Note: To adjust size of game board, change width in gameBoard.module.css and width in boardColumn.module.css - the squares will automatically resize accordingly!

function GameBoard() {
  return (
    <div className={css.gameBoard}>
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
    </div>
  );
}

export default GameBoard;
