function popup() {
  chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {todo: "follow"});
  });
}


document.addEventListener("DOMContentLoaded", function() {
  popup();
});

window.onload = function() {
  popup();
}