function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function getAPI(event) {
  event.preventDefault();
  let topicInput = document.querySelector("#topic-input");
  let context = "You are a poet who writes short rhyming poems in Danish.";
  let prompt = `Please, write me a poem about ${topicInput.value}. It should be written in basic HTML and each line should be separated by </ br>. The answer should only be the poem and the title, and you should sign it with "SheCodes AI". Please put the title in an <h3> and put the signature in a <em> tag. Please, behave and don't include the quotes or the word HTML`;
  let apiKey = "02f8a7tad0e0efa9c2364cdececoab3a";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatePoem);
}

let poem = document.querySelector("#poem");

let submitButton = document.querySelector("#topic-submit");
submitButton.addEventListener("click", getAPI);
