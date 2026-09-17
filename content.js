console.log("Blindspot is running!");

// Find the video elements currently present on the page.
const videos = document.querySelectorAll("video");


// Find YouTube's progress bar and timestamp elements.

const progressBar = document.querySelector(".ytp-progress-bar-container");
console.log("Progress bar:", progressBar);

const timeStamp = document.querySelector(".ytp-time-display.notranslate");
console.log("time stamp:", timeStamp);

// Listen for changes to the progress bar setting from the popup.
chrome.runtime.onMessage.addListener(function(message) {

    if (message.hideProgressBar !== undefined) {

    if (message.hideProgressBar === true) {
        progressBar.style.display = "none";
    } else {
        progressBar.style.display = "";
    }

}

});

// Listen for changes to the timestamp setting from the popup.

chrome.runtime.onMessage.addListener(function(message){
    if (message.hideTime !== undefined) {

    if (message.hideTime === true) {
        timeStamp.style.display = "none";
    } else {
        timeStamp.style.display = "";
    }

}
});
