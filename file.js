let authorname = document.querySelector(".authorname");
let quotetext = document.querySelector(".quotetext");
let button = document.querySelector(".button");
    


async function getQuote() {
    event.preventDefault()
    try {
        let response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error('Network response was not ok');
        
        let data = await response.json();
        console.log(data.slip.advice); // Accessing the quote from the data object
        quotetext.textContent = data.slip.advice; // Displaying the quote in the text content
    } catch (error) {
        console.error('Fetch error:', error); // Error handling
    }
}

button.addEventListener("click", getQuote);