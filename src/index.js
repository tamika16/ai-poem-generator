function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "ebca453d09d2of07d0aaa7ab4fdt23ed";
  let context =
    "You are an expert in turning any subject into a positive, uplifting and affirming poem. Please generate a properly formatted haiku poem using basic html and do NOT include a title or heading. Make sure to follow the instructions.";
  let prompt = `Instructions: Generate a poem about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = "Generating your poem...";

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
