// Will show the verse from the book typed by the user
function showVerse(response) {

    new Typewriter("#verse", {
        strings: response.data.answer,
        autoStart: true,
        delay: 100,
        cursor: "",
    });
}

// function to search the information entered by the user
function pullVerse(event) {
    event.preventDefault();

    let userInput = document.querySelector("#userInput");

    // AI api, context and prompt instructions
    let apiKey = "9a9b6ao3534d1b2afb7b49dddt30a6e7"
    let prompt = "Your assignment is to generate a full verse from the bible, name the book, chapter number as well as the verse number in the title, write the informatin in HTML format and do not diplay the html tags";
    let context = `Generate bible verse from the book of ${userInput}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating your verse");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(showVerse);

}

let submition = document.querySelector("#search-form");
submition.addEventListener("submit", pullVerse);