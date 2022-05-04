
/* Player's name input */

let inputName = document.getElementById('enterGameButton').innerHTML += `
    <fieldset>
        <input type="text" id="fname" oninput="this.value = this.value.toUpperCase()" placeholder="Enter your name"  required>
    </div>
    </div>
    <button aria-label="Enter" id="gameButton" class="btn btn-success btn-lg" "style="background-color:rgb(33, 142, 76)"><a href="game.html">Enter</a></button>
    </fieldset>
`;

document.getElementById('fname').style.height = "50px";

console.log(sessionStorage.getItem('name'));
const personValue = document.getElementById('fname');
const btnInput = document.getElementById('gameButton');
btnInput.onclick = function () {
    const player = personValue.value;
    sessionStorage.setItem('name', player);
};