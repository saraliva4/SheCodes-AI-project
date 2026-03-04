function generatePoem(response) {
  poem.innerHTML = response.data.answer;
}

function getAPI(event) {
  event.preventDefault();
  let context = "You are a poet who writes short rhyming poems in Danish.";
  let prompt = `Please, write me a poem about ${topic}.`;
  let apiKey = "02f8a7tad0e0efa9c2364cdececoab3a";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatePoem);
}

let topic = "flowers";
let poem = document.querySelector("#poem");

let submitButton = document.querySelector("#topic-submit");
submitButton.addEventListener("click", getAPI);
