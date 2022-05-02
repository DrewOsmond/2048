<script>
    import GameBoard from "./GameLogic/board"
    import Colors from "./Colors"
    import Commands from "./Commands"
    let game;
    let board;
    let gameOver = false;

    function move(e) {
        game.move(Commands[e.key], updateBoard)
        board = game.board
        console.log(board)
        if (game.gameOver) {
            endGame()
        }
    }

    function startNewGame() {
        game = new GameBoard();
        board = game.board
        document.addEventListener("keydown", move)
    }

    function endGame() {
        gameOver = True; 
        document.removeEventListener("keydown", move)
    }

    function updateBoard(newBoard) {
        board = newBoard;
    }

    (() => startNewGame())()
</script>

<div class="game_section">
    <div class="board_background">
        {#each board as row }
        <div class="row">
            {#each row as cell }
            {#if cell}
            <div class={`${cell} cell`} style={`background-color: ${Colors[cell]}`}>
                {cell}
            </div>
            {:else}
            <div class="empty" />
            {/if}
            {/each}
        </div>
        {/each}
    </div>
    {#if gameOver}
        <div>Game over</div>
    {/if}
</div>

<style>

    .game_section {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .board_background {
        background-color: grey;
        padding: 16px 16px;
        height: 465px;
        width: 465px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 10px;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .empty {
        background-color: whitesmoke;
        width: 100px;
        height: 100px;
        border-radius: 10px;
    }

    .cell {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
    }


</style>