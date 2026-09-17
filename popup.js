const progressToggle = document.querySelector("#progressToggle");

console.log("Progress Toggle:", progressToggle);

chrome.storage.local.get("hideProgressBar", function(result) {

    progressToggle.checked = result.hideProgressBar;

});

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

chrome.storage.local.get("hideTime",function(result){
    timestampToggle.checked = result.hideTime;
});

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
