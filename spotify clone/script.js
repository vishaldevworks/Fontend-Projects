// console.log("Welcome to spotify");

// let songIndex = 0;

// let audioElement = new Audio("songs/1.mp3");

// let masterPlay = document.getElementById("masterPlay");

// let myProgressBar = document.getElementById("myProgressBar");


// // Handle master play button

// masterPlay.addEventListener("click", () => {

//     if (audioElement.paused || audioElement.currentTime <= 0) {

//         audioElement.play();

//         masterPlay.classList.remove("fa-play-circle");
//         masterPlay.classList.add("fa-pause-circle");

//     } else {

//         audioElement.pause();

//         masterPlay.classList.remove("fa-pause-circle");
//         masterPlay.classList.add("fa-play-circle");

//     }

// });


// // Listen to Events

// audioElement.addEventListener("timeupdate", () => {

//     console.log("timeupdate");

// });

console.log("JS LOADED");

let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");

masterPlay.addEventListener("click", () => {

    console.log("BUTTON CLICKED");

    audioElement.play()
        .then(() => {
            console.log("AUDIO PLAYING");
        })
        .catch((error) => {
            console.log("AUDIO ERROR:", error);
        });

});