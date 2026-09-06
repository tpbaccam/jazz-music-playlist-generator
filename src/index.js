function generatePlaylist(event) {
  event.preventDefault();

  let apiKey = "f06ffeb6b437a2d43f8900ca0tf29cod";
  let prompt =
    "You are a jazz music expert. Please generate a playlist of 5 jazz songs based on the user's input.";
  let context = `Generate a jazz playlist based on the following input: ${prompt}. Please provide a list of 5 song titles that fit the jazz theme with their respective artists.`;
  let apiUrl =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";

  new Typewriter("#playlistContainer", {
    strings:
      "Miles Davis, John Coltrane, Ella Fitzgerald, Duke Ellington, Billie Holiday, Thelonious Monk, Charlie Parker, Louis Armstrong, Chet Baker, Herbie Hancock",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  axios.get(apiUrl).then(displayPlaylist);
}

let playlistFormElement = document.querySelector("#playlistForm");
playlistFormElement.addEventListener("submit", generatePlaylist);
