/*
----------------PLAN:----------------

Board details:
 - 6 columns
 - 1 row categories, then five rows of $ amounts and questions
 - First round $ amts: 200, 400, 600, 800, 1000
 - Second round $ amts: 400, 800, 1200, 1600, 2000
 - Blue with white text ($ amnts in yellow)

MVP:
 - A full board of first round jeopardy

MVP components:
 - Category square 
 - Question square 
 - Board display 

MVP functionality:
 - Display the board with everything arranged correctly (categories above columns of $/questions in ascending $ order)
 - When $ amt is clicked, show question
 - When clicked 2nd time, show answer
 - When clicked 3rd time, blank out the square

-------------------------------------
*/

import React, { useEffect } from 'react';
import './App.css';

const apiUrl = 'http://jservice.io/api/';

function App() {
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });

  return <div className="App">testing</div>;
}

export default App;
