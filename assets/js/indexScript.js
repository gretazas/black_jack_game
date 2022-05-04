
/* Player's name input */

let inputName = document.getElementById('enterGameButton').innerHTML += `
    <form>
        <input type="text" id="fname" placeholder="Enter your name" required>
        <button aria-label="Enter" id="gameButton" class="btn btn-success btn-lg" "style="background-color:rgb(33, 142, 76)" onclick="window.location.href='game.htm'">Enter</button>
    </form>
`;

document.getElementById('fname').style.height = "50px";

console.log(sessionStorage.getItem('name'));
const personValue = document.getElementById('fname');
const btnInput = document.getElementById('gameButton');
btnInput.onclick = function () {
    const player = personValue.value;
    sessionStorage.setItem('name', player);
};
