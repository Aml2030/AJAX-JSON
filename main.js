let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);

    let container = document.createElement("div");
    container.style.cssText = `display:flex; flex-wrap:wrap; gap:10px`;
    container.id = "data";

    for (let i = 0; i < mainData.length; i++) {
      let div = document.createElement("div");
      div.style.cssText = `background: #6565bb; color:#fff; font:bold 16px arial;
        margin:10px auto; padding:5px 15px; width:400px; border-radius:10px;`;

      //Create <h2>..</h2> to Hold Title
      let title = document.createElement("h2");
      let titleName = document.createTextNode(`${mainData[i].title}`);
      title.appendChild(titleName);

      //Create <p>..</p> to Hold Article
      let article = document.createElement("p");
      let articleName = document.createTextNode(`${mainData[i].article}`);
      article.appendChild(articleName);

      //Create <p>..</p> to Hold Author
      let author = document.createElement("p");
      let authorName = document.createTextNode(`Author: ${mainData[i].author}`);
      author.appendChild(authorName);

      //Create <p>..</p> to Hold Category
      let category = document.createElement("p");
      let categoryName = document.createTextNode(
        `Category: ${mainData[i].category}`
      );
      category.appendChild(categoryName);

      //Append all elements to their div
      div.append(title, article, author, category);

      //Append div to container
      container.appendChild(div);

      //Append container to the body
      document.body.appendChild(container);
    }
  }
};
