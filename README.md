# MEMO game

## Technology stack

- React
- Redux
- TypeScriopt
- ESLint
- Prettier
- Styled-components

## Rules of the game:

- the page consists of a board of tiles the smallest is 4 tyles, the largest is 24 tiles;
- every 2 tiles have the same image;
- each tile is closed, so you can't see an image;
- the gameplay is the sequence of rounds;
- in each round you should select 2 tiles with the same pokemon to make them disappear;
- if you select 2 tiles with different colors then cards are flipped back to "closed" state, and you try again;
- the game is considered to be over when all of the tiles are opened.