export default class Board {
  board: GameBoard;
  score: number;

  constructor() {
    this.board = this.generateBoard();
    this.score = 0;

    this.generateRandNumber();
  }

  generateBoard(): GameBoard {
    const board: GameBoard = [];

    for (let i = 0; i < 4; i++) {
      const row: Row = [null, null, null, null];
      board.push(row);
    }

    return board;
  }

  move(direction: string): void {
    switch (direction) {
      case "up":
        return this.moveUp();
      case "down":
        return this.moveDown();
      case "right":
        return this.moveRight();
      case "left":
        return this.moveLeft();
    }
  }

  moveUp(): void {
    console.log("up");
  }

  moveDown(): void {
    console.log("down");
  }

  moveLeft(): void {
    console.log("left");
  }

  moveRight(): void {
    console.log("right");
  }

  generateRandNumber() {
    let x: number = Math.floor(Math.random() * 4);
    let y: number = Math.floor(Math.random() * 4);
    console.log(this.board);
    while (this.board[x][y] !== null) {
      x = Math.floor(Math.random() * 4);
      y = Math.floor(Math.random() * 4);
    }

    this.board[x][y] = 2;
  }
}

type Row = (number | null)[];

type GameBoard = Row[];
