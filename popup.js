const progressToggle = document.querySelector("#progressToggle");

console.log("Progress Toggle:", progressToggle);

// Load the saved progress bar setting when the popup opens.
chrome.storage.local.get("hideProgressBar", function(result) {

    progressToggle.checked = result.hideProgressBar;

});

// Save the new setting and send it to the YouTube tab when the toggle changes.
progressToggle.addEventListener("change", function() {

    console.log("Progress toggle changed!");
    console.log("Current state:", progressToggle.checked);

    chrome.storage.local.set({
        hideProgressBar: progressToggle.checked
    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        chrome.tabs.sendMessage(tabs[0].id, {
            hideProgressBar: progressToggle.checked
        });

    });

});

const timestampToggle = document.querySelector("#timestampToggle")

console.log("Timestamp Toggle:", timestampToggle);

// Load the saved timestamp setting when the popup opens.
chrome.storage.local.get("hideTime",function(result){
    timestampToggle.checked = result.hideTime;
});

// Save the new setting and send it to the YouTube tab when the toggle changes.
timestampToggle.addEventListener("change", function(){
    console.log("Timestamp toggle changed!");
    console.log("Current State:", timestampToggle.checked);

    chrome.storage.local.set({
        hideTime: timestampToggle.checked
    });

    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {
            hideTime:timestampToggle.checked
        });
    });
});
