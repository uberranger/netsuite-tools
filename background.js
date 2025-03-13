chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getQuote") {
      fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
        .then(response => response.json())
        .then(data => {sendResponse({ text: data?.text })})
        .catch(error => {
          console.error("Fetch error:", error);
          sendResponse({ error: error.message });
        });
      return true;
    }
  });
  