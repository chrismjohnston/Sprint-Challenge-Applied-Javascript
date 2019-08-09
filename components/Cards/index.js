// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')

//create success and failure case for promise with props to Twitter for error message

.then(items => {
    const javaArticles = items.data.articles.javascript;
    const bootStrapArticles = items.data.articles.bootstrap;
    const techArticles = items.data.articles.technology;
    const jqueryArticles = items.data.articles.jquery;
    const nodeArticles = items.data.articles.node;

    //create an array for the forEach to loop over
    const articles = [javaArticles, bootStrapArticles, techArticles, jqueryArticles, nodeArticles]

    articles.forEach(article => {
        article.forEach(art => {
            const cards = document.querySelector('.cards-container');
            cards.addEventListener(Article(art));
        })
        
    })

    console.log('It works, cards', items)
})

.catch(error => {
    console.log("Sorry, something went wrong. A team of highly trained monkeys has been dispatched to deal with this situation", error);
})

function Article(obj){
    //created the necessary elements in the DOM for the card container
    const card = document.createElement('div');

    return card;
}