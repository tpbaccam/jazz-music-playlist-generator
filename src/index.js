function generatePlaylist(event) {
  event.preventDefault();

  alert("Generating playlist...");
  // Your playlist generation logic here
}

let playlistFormElement = document.querySelector("#playlistForm");
playlistFormElement.addEventListener("submit", generatePlaylist);
