var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:53");
var anotherSong = new Song("Another Song", "Me", "3:00");

playlist.add(hereComesTheSun);
playlist.add(anotherSong);

var PlaylistElement = document.getElementById("playlist");

playlist.renderInElement(PlaylistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(PlaylistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(PlaylistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(PlaylistElement);
}
