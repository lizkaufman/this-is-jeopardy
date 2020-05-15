/*
----------------PLAN:----------------

Board details:
 - 6 columns
 - 1 row categories, then five rows of $ amounts and questions
 - First round $ amts: 200, 400, 600, 800, 1000
 - Second round $ amts: 400, 800, 1200, 1600, 2000
 - Blue with white text ($ amnts in yellow)

Colors:
 - Dark navy: #0E0039 http://www.colorhunter.com/tag/jeopardy/1
 - Main blue: #060CE9 https://www.colourlovers.com/color/060CE9/Jeopardy_Blue
 - Yellow: #FFCC00 https://www.colorcombos.com/colors/FFCC00
 - Dark pink: #F22D95 http://www.colorhunter.com/tag/jeopardy/1
 - Lighter pink: #E416EE http://www.colorhunter.com/tag/jeopardy/1

MVP:
 - A full board of first round jeopardy

MVP components:
 - Category square 
 - Play squares (incl question and difficulty)
 - Board display 

MVP functionality:
 - Display the board with everything arranged correctly (categories above columns of $/questions in ascending $ order)
 - When $ amt is clicked, show question
 - When clicked 2nd time, show answer
 - When clicked 3rd time, blank out the square

Goals for further sprints:
 - Double jeopardy board once the first round is over 
 - Entering the answer and checking if it's correct or not 
 - Scoring 
 - Multiplayer (using the same device)
 - Multiplayer (using sockets)

-------------------------------------
*/

import React, { useEffect } from 'react';
import './App.css';

import GameBoard from '../GameBoard';

function App() {
  return (
    <div className="App">
      <GameBoard />
    </div>
  );
}

export default App;
