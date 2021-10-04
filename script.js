
//Calling Fetch api here:
fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json()) //Converting the text into json format
//Extracting the joke text out of json file:
.then(jokeData =>{  
  const jokeText = jokeData.attachments[0].text;
  const jokeElement = document.getElementById('jokeElement');

  jokeElement.innerHTML = jokeText;
})