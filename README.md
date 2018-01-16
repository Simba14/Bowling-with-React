Bowling with React
=================
This is a bowling scorecard built using React.js and Redux.

Unit tests have been written using Jest and enzyme.

Enter your bowling scores [here](https://blundells-bowling.herokuapp.com/)!

![Blundell's Bowling](https://i.imgur.com/yj6ESJK.png)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Run Locally:
-----
1. Open your terminal
2. Either Git clone this repository </br>
`git clone https://github.com/Simba14/Bowling-with-React.git`
3. Change into the directory: `cd Bowling-with-React`
4. Run `yarn start`
5. Open your browser and go to http://localhost:3000/
6. Bowl Away!

To run tests, type in `yarn test`

![tests](https://i.imgur.com/0Xelgm8.gif)

Things To Improve On:
-----

- Test Game component by mocking redux elements.
- Refactor updateCumulativeScore function (as it's rather ugly!)
- Render 'X' if strike and '/' if a spare is bowled.
- Add a multiplayer mode.

Bowling Rules:
-----
A game consists of 10 frames. In general, each frame has 2 rolls.

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points
    1, 9, 10 in the 10th frame gives 20 points
### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.
