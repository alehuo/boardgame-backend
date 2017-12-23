# Untitled boardgame back end

[Travis CI badge] [Codecov badge] [TypeScript badge] [Open source badge] [GPLv3 license badge]

## Introduction

This repository contains source code for an untitled board game. The game has a board consisting of 33 holes which of 32 are filled with pieces, leaving the center hole empty. The goal is to empty the board by moving the pieces over one another.

Coded with TypeScript, strict TSLint rules and Mocha as a testing framework.

## Example

Example:
- 2 is inaccessible
- 1 has a piece on it
- 0 is empty

For example, if I'd want to move the selected piece down:

<pre>
2  2  1  1  1  2  2
2  2  1 [1] 1  2  2
1  1  1  1  1  1  1
1  1  1  0  1  1  1
1  1  1  1  1  1  1
2  2  1  1  1  2  2
2  2  1  1  1  2  2
</pre>

--->

<pre>
2  2  1  1  1  2  2
2  2  1  0  1  2  2
1  1  1  0  1  1  1
1  1  1 [1] 1  1  1
1  1  1  1  1  1  1
2  2  1  1  1  2  2
2  2  1  1  1  2  2
</pre>

The piece "jumps" over another piece and lands on the empty slot of the board. Lets continue the game with another example:

<pre>
2  2  1  1  1  2  2
2  2  1  0  1  2  2
1  1  1  0  1 [1] 1
1  1  1  1  1  1  1
1  1  1  1  1  1  1
2  2  1  1  1  2  2
2  2  1  1  1  2  2
</pre>

--->

<pre>
2  2  1  1  1  2  2
2  2  1  0  1  2  2
1  1  1 [1] 0  0  1
1  1  1  1  1  1  1
1  1  1  1  1  1  1
2  2  1  1  1  2  2
2  2  1  1  1  2  2
</pre>

This piece was moved to the left.

The goal of the game is to move pieces over their neighbour pieces, landing on an empty spot. In the end the player should have only one piece remaining.

## License

This project has been licensed with GPLv3 license.

## Authors

- alehuo / Developer