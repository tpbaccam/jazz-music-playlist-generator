function generatePlaylist(event) {
  event.preventDefault();

  new Typewriter("#playlistContainer", {
    strings:
      "Miles Davis, John Coltrane, Ella Fitzgerald, Duke Ellington, Billie Holiday, Thelonious Monk, Charlie Parker, Louis Armstrong, Chet Baker, Herbie Hancock",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let playlistFormElement = document.querySelector("#playlistForm");
playlistFormElement.addEventListener("submit", generatePlaylist);
