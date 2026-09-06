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

  let apiKey = "f06ffeb6b437a2d43f8900ca0tf29cod";
  let prompt =
    "You are a modernjazz music expert. Please generate a playlist of 5 modern jazz songs based on the user's input.";
  let context = `Generate a modern jazz playlist based on the following input: ${prompt}. Please provide a list of 5 song titles that fit the jazz theme with their respective artists. In the list please include a <br /> tag after each song title and artist. `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating jazz playlist...");

  axios.get(apiUrl).then(displayPlaylist);
}

let playlistFormElement = document.querySelector("#playlistForm");
playlistFormElement.addEventListener("submit", generatePlaylist);
