const sleep = (seconds) => new Promise(proceed => {
  console.log(`WAITING FOR ${seconds} SECONDS...`);
  setTimeout(proceed, seconds * 1000);
});

const followAll = async () => {
  const $followButtons = '[data-testid$="-follow"]';
  let followButtons = Array.from(this.document.querySelectorAll($followButtons));
  while (followButtons) {  
    for (let i = 0 ; i < followButtons.length ; ++i) { 
      followButtons[i].click();
      await sleep(3);
    }
    window.scrollBy({
      top: 1000,
      behavior: 'smooth'
    });
    followButtons = Array.from(this.document.querySelectorAll($followButtons));
  }
};

chrome.runtime.onMessage.addListener(function (request) {
  if (request.todo === "follow") {
    followAll();
  }
});