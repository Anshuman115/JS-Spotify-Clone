console.log("Spotify");

//inintialize variable
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
// audioElement.play();
// console.log(audioElement.duration);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let song = [
  { songName: "Isqh", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Isqh2", filePath: "songs/2.mp3", coverPath: "covers/1.jpg" },
  { songName: "Isqh3", filePath: "songs/3.mp3", coverPath: "covers/1.jpg" },
  { songName: "Isqh4", filePath: "songs/4.mp3", coverPath: "covers/1.jpg" },
  { songName: "Isqh5", filePath: "songs/5.mp3", coverPath: "covers/1.jpg" },
  { songName: "Isqh6", filePath: "songs/6.mp3", coverPath: "covers/1.jpg" },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = song[i].coverPath;
  element.getElementsByTagName("span")[0].innerHTML = song[i].songName;
  let audio = new Audio(song[i].filePath);
  console.log(audio);
  let durationn = 0;
  // audio.onloadedmetadata = function () {
  //   console.log(audio.duration);
  //   element.getElementsByClassName("timeStamp")[0].innerHTML =
  //     parseInt(audio.duration / 60) +
  //     ":" +
  //     parseInt(audio.duration % 60) +
  //     " " +
  //     '<i class="fa-solid songItemPlay fa-play-circle"></i>';
  // };
});

//play pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  // console.log(audioElement.duration);
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);
  myProgressBar.value = progress;
});

//seeking progress bar //OPPOPPOPOPOPPPPPP
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = song[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = song[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("prevous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 5;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = song[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
