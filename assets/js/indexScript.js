/* Player's name input */

let inputName = document.getElementById('enterGameButton').innerHTML += `
    <fieldset>
        <input type="text" id="fname" oninput="this.value = this.value.toUpperCase()" placeholder="Enter your name"  required>
    <button aria-label="Enter" id="gameButton" class="btn btn-success btn-lg" "style="color: black;background-color:rgb(33, 142, 76)">Enter</a></button>
    </fieldset>
`;

document.getElementById('fname').style.height = "50px";

console.log(sessionStorage.getItem('name'));
const personValue = document.getElementById('fname');
const btnInput = document.getElementById('gameButton');

btnInput.onclick = function () {
    const player = personValue.value;
    sessionStorage.setItem('name', player);
    window.location.href = "https://gretazas.github.io/black_jack_game/game.html";
};

nameInputEnter = document.getElementById('fname');
nameInputEnter.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const player = personValue.value;
      sessionStorage.setItem('name', player);
      window.location.href = "https://gretazas.github.io/black_jack_game/game.html";
      document.getElementById("gameButton").click();
    }
  });
  
  