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

    let userInputElement = document.querySelector(".user-input");

    // AI api, context and prompt instructions
    let apiKey = "9a9b6ao3534d1b2afb7b49dddt30a6e7"
    let prompt = "Your assignment is to generate a bible verses, name the book, chapter number as well as the verse number in the title, write the information in HTML format and do not diplay the html tags, add the Verse AI signature at the end in a <strong> tag";
    let context = `Generate a verse from ${userInputElement}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let mainElement = document.querySelector(".hidden");
    let verseElement = document.querySelector(".verse");

    mainElement.classList.remove("hidden");
    verseElement.innerHTML = "Generating your verse...🙏🏽";

    axios.get(apiUrl).then(showVerse);
}

let submition = document.querySelector("#search-form");
submition.addEventListener("submit", pullVerse);