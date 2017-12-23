# Untitled boardgame back end

[Travis CI badge] [Codecov badge] [TypeScript badge] [Open source badge] [GPLv3 license badge]

## Introduction

This repository contains source code for an untitled board game. The game has a board consisting of 33 holes which of 32 are filled with pieces, leaving the center hole empty. The goal is to empty the board by moving the pieces over one another.

Coded with TypeScript, strict TSLint rules and Mocha as a testing framework.

# Picture of the board

![Picture of the board](doc/board.png)

## Example

Example:
- 1 has a piece on it
- 0 is empty

For example, if I'd want to move the selected piece down:

<pre>
      1  1  1
      1 [1] 1
1  1  1  1  1  1  1
1  1  1  0  1  1  1
1  1  1  1  1  1  1
      1  1  1
      1  1  1 
</pre>

--->

<pre>
      1  1  1
      1  0  1
1  1  1  0  1  1  1
1  1  1 [1] 1  1  1
1  1  1  1  1  1  1
      1  1  1
      1  1  1
</pre>

The piece "jumps" over another piece and lands on the empty slot of the board. Lets continue the game with another example:

<pre>
      1  1  1
      1  0  1
1  1  1  0  1 [1] 1
1  1  1  1  1  1  1
1  1  1  1  1  1  1
      1  1  1
      1  1  1
</pre>

--->

<pre>
      1  1  1
      1  0  1
1  1  1 [1] 0  0  1
1  1  1  1  1  1  1
1  1  1  1  1  1  1
      1  1  1
      1  1  1
</pre>

This piece was moved to the left.

The goal of the game is to move pieces over their neighbour pieces, landing on an empty spot. In the end the player should have only one piece remaining. One possible outcome of the game is this:

<pre>
      0  0  0
      0  0  0
0  0  0  1  0  0  0
0  0  0  0  0  0  0
0  0  0  0  0  0  0
      0  0  0
      0  0  0
</pre>

## License

This project has been licensed with GPLv3 license.

## Authors

- alehuo / Developer