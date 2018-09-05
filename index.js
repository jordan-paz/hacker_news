let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b4820e97800e41cc9256a7ab16659da2';
fetch(url)
.then(r => r.json())
.then(data => {
  let articles = data.articles
  let newsList = document.createElement("ul"); 
  let body = document.querySelector("body"); 
  body.appendChild(newsList);
  articles.map(story => {
      let storyItem = document.createElement("li");
      storyItem.innerHTML =
        '<a href="' + story.href + '">' + story.title + "</a>";
      newsList.appendChild(storyItem); 
    });
})
  .catch(e => {
    console.log("An error occured: ${e}");
  });
