function displayPlaylist(response) {
  new Typewriter("#playlistResults", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePlaylist(event) {
  event.preventDefault();
  let userInput = document.querySelector("#userInput");
  let apiKey = "f06ffeb6b437a2d43f8900ca0tf29cod";
  let prompt =
    "You are a modern jazz music expert. Please generate a playlist of 5 modern jazz songs based on the user's input.";
  let context = `Generate a modern jazz playlist based on the following input: ${userInput.value}. Please provide a list of 5 song titles that fit the jazz theme with their respective artists. In the list please include a <br /> tag before the first song title and after each song title and artist. Each song title should be <strong> `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let playlistContainer = document.querySelector("#playlistResults");
  playlistContainer.style.display = "block";

  console.log("Generating playlist...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPlaylist);
}

let playlistFormElement = document.querySelector("#playlistForm");
playlistFormElement.addEventListener("submit", generatePlaylist);
