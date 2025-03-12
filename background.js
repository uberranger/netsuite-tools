chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getQuote") {
      fetch("https://zenquotes.io/api/random")
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log("API Response:", data); // Debugging
          sendResponse({ quote: data[0]?.q, author: data[0]?.a });
        })
        .catch(error => {
          console.error("Fetch error:", error);
          sendResponse({ error: error.message });
        });
      return true; // Keeps the message channel open for async response
    }
  });
  