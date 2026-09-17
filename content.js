console.log("Blindspot is running!");

// 1.finds all videos on the web
const videos = document.querySelectorAll("video");


console.log(videos);

// 2.names videos.length as "number of videos".
// 3.length here denotes, how many videos are playing on the web.
console.log("Number of videos:", videos.length);

// 4.arrays start with 0, hence "videos[0]" is the first video and I named it "First video"
// this will almost always be the case since I'm doing this for youtube.
console.log("First video:", videos[0]);

// 5.creates a variable "progressBar" & and identifyes the progress bar container on the web.
const progressBar = document.querySelector(".ytp-progress-bar-container");
console.log("Progress bar:", progressBar);

//applying the same logic for the time stamp.

// same as 5.
const timeStamp = document.querySelector(".ytp-time-display.notranslate");
console.log("time stamp:", timeStamp);

//Recieving message from popup.js and putting if condition to hide or unhide the progress bar on the boolean value
chrome.runtime.onMessage.addListener(function(message) {

    if (message.hideProgressBar !== undefined) {

    if (message.hideProgressBar === true) {
        progressBar.style.display = "none";
    } else {
        progressBar.style.display = "";
    }

}

});

chrome.runtime.onMessage.addListener(function(message){
    if (message.hideTime !== undefined) {

    if (message.hideTime === true) {
        timeStamp.style.display = "none";
    } else {
        timeStamp.style.display = "";
    }

}
});