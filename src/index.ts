import * as readline from 'readline';

// Initial board position
let board: number[][] = [
    [2, 2, 1, 1, 1, 2, 2],
    [2, 2, 1, 1, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [2, 2, 1, 1, 1, 2, 2],
    [2, 2, 1, 1, 1, 2, 2],
    [2, 2, 1, 1, 1, 2, 2]
];

enum MovingDirection {
    UP, DOWN, LEFT, RIGHT
}

function validMove(board: number[][], x: number, y: number, direction: MovingDirection): boolean {

    // Check for board coordinates.
    if (!inBoard(board, x, y)) {
        return false;
    }

    // Check for empty or blocked piece (you can't move them!)
    if (board[y][x] == 2 || board[y][x] == 0) {
        return false;
    }

    // Check for directions.
    let newX: number = x;
    let newY: number = y;
    let checkX: number = x;
    let checkY: number = y;
    switch (direction) {
        case MovingDirection.UP:
            newY -= 2;
            checkY -= 1;
            break;
        case MovingDirection.DOWN:
            newY += 2;
            checkY += 1;
            break;
        case MovingDirection.LEFT:
            newX -= 2;
            checkX -= 1;
            break;
        case MovingDirection.RIGHT:
            newY += 2;
            checkY += 1;
            break;
        default:
            return false;
    }

    // After determining new (x,y) coordinate and (checkX,checkY) (that we have to devour to move), 
    // check for the bounds and if the spot is not empty:
    if (!inBoard(board, newX, newY) || (board[newY][newX] == 1 || board[newY][newX] == 2)) {
        return false;
    }

    if (board[checkY][checkX] == 0 || board[checkY][checkX] == 2) {
        return false;
    }

    return true;
}

function move(board: number[][], x: number, y: number, direction: MovingDirection): boolean {
    if (!validMove(board, x, y, direction)) {
        return false;
    }

    // Move the piece.

    let newX: number = x;
    let newY: number = y;
    let checkX: number = x;
    let checkY: number = y;
    switch (direction) {
        case MovingDirection.UP:
            newY -= 2;
            checkY -= 1;
            break;
        case MovingDirection.DOWN:
            newY += 2;
            checkY += 1;
            break;
        case MovingDirection.LEFT:
            newX -= 2;
            checkX -= 1;
            break;
        case MovingDirection.RIGHT:
            newY += 2;
            checkY += 1;
            break;
    }

    board[y][x] = 0;
    board[checkY][checkX] = 0;
    board[newY][newX] = 1;

    return true;
}

function inBoard(board: number[][], x: number, y: number): boolean {
    return !(x > board[0].length - 1 || x < 0 || y >= board.length || y < 0);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var ask = function () {
    board.forEach((boardRow: number[]) => {
        console.log(boardRow);
    });
    rl.question('choose x,y :', (answer: string) => {
        let input: string[] = answer.split(',');
        if (input.length < 2) {
            console.error('Invalid coordinates!');

        } else {
            let x: number = parseInt(input[0]);
            let y: number = parseInt(input[1]);
            rl.question('choose direction (up,down,left,right) :', (answer: string) => {
                let tmpDirection: string = answer.toLowerCase();
                let direction: MovingDirection = MovingDirection.UP;
                switch (tmpDirection) {
                    case 'up':
                        direction = MovingDirection.UP;
                        break;
                    case 'down':
                        direction = MovingDirection.DOWN;
                        break;
                    case 'left':
                        direction = MovingDirection.LEFT;
                        break;
                    case 'right':
                        direction = MovingDirection.RIGHT;
                        break;
                }
                if (!move(board, x, y, direction)) {
                    console.error('Failed to move piece!');
                }
                ask();

            });
        }

    })
}

ask();