export default class Board {
  board: GameBoard;
  score: number;
  gameOver: boolean;

  constructor() {
    this.board = this.generateBoard();
    this.score = 0;
    this.gameOver = false;

    this.generateRandNumber();
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
    let moved: boolean = false;

    for (let i = this.board.length - 2; i >= 0; i--) {}
  }

  moveDown(): void {
    let moved: boolean = false;
    for (let i = this.board.length - 2; i >= 0; i--) {
      const row: Row = this.board[i];
      for (let j = 3; j >= 0; j--) {
        const cell: Cell = row[j];
        const belowCell: Cell = this.board[i + 1][j];
      }
    }
    if (moved) {
      this.generateRandNumber();
    }
  }

  moveLeft(): void {
    console.log("left");
  }

  moveRight(): void {
    console.log("right");
  }

  generateRandNumber(): void {
    const availableCells: [number, number][] = this.grabAvailableCells();
    if (availableCells.length === 0) return this.isGameOver();

    const [x, y] =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    this.board[x][y] = 2;
  }

  grabAvailableCells(): [number, number][] {
    const availableCells: [number, number][] = [];

    for (let i = 0; i < this.board.length; i++) {
      const row: Row = this.board[i];
      for (let j = 0; j < row.length; j++) {
        const cell: Cell = row[j];
        if (!cell) {
          availableCells.push([i, j]);
        }
      }
    }

    return availableCells;
  }

  isGameOver(): void {
    for (let i = 0; i < this.board.length; i++) {
      const row: Row = this.board[i];
      for (let j = 0; j < row.length; j++) {
        const cell: Cell = row[j];
        const left: Cell = row[j - 1];
        const right: Cell = row[j + 1];
        const upper: Cell = row[i - 1] ? row[i - 1][j] : undefined;
        const downward: Cell = row[i + 1] ? row[i + 1][j] : undefined;

        if (
          cell === left ||
          cell === right ||
          cell === upper ||
          cell === downward
        ) {
          return;
        }
      }
    }

    this.gameOver = true;
  }
}

type Row = (number | null)[];
type Cell = number | null;
type GameBoard = Row[];
