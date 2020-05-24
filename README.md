# This is Jeopardy! (Well... a tribute at least!)

I've been a Jeopardy superfan since waaaay back, but living in England makes episodes hard to find! So when I found http://jservice.io/, I thought I'd try to make my own. :)

I've used the jservice.io API to pull through categories by category id and use this category id to get a set of questions and answers for each column, and I've designed a basic Jeopardy board in React to house them. Click once on a dollar amount for your question, a second time for your answer, and a third time to clear the square. Refresh to get a whole new set of questions. 

This is the MVP version - I picture this as something played on a laptop or an iPad as a party game or family game as it is now (or you can be a big nerd like me and just have fun "training" on your own, haha).

## My thoughts and plans for future sprints and iterations:

- **Bug squashing in terms of question/answer quality:** Occasionally, the data coming through from the API is a bit patchy - sometimes question objects have a blank string for question or answer, which means that square of the game doesn't really function. A basic improvement would be to add logic in to filter for these and replace them with another complete Q&A pair. This would be easier in some categories that have lots of questions to choose from and can be easily swapped around, but other categories only have five questions in total, so it'll take a bit of thinking to crack it. Also, some answers come through with html tags, so I need logic to stop those from showing on the board (i.e. regEx or similar). And some questions depend on something visual (a picture or video clip) during the show that doesn't come through in the data. These have a flag within the JSON if others have marked them as invalid for this format, so I'd like to implement logic that sorts through and doesn't choose/display these.
  
- **Mobile version:** Right now, the game is responsive for iPads and laptops, adjusting to fit small variations in that range of screen sizes, but a phone screen compresses it too much to be really usable. I'd need to slightly tweak the design to render the whole board when choosing questions but then zooming in on the question and answer itself in the specific square if the device is phone-width.
 
- **Scorekeeping on the actual game itself:** As it's constructed now, it relies on you to do your own scorekeeping on a bit of paper or something, but ideally, I want there to be logic within the game to detect a correct answer, add the dollar amount to the total, and display that. 
 
- **Multiplayer capabilities:** Once I implement scorekeeping for one, it shouldn't be too hard to duplicate that for additional players. I'd need to replicate the podiums with the names and dollar amounts in the display somehow and add a win condition at the end as well.
