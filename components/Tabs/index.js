// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')

//create success and failure case for promise with props to Twitter for error message
.then(item => {
    const topics = item.data.topics;

    //loop over array from axios, select the topics div, creates a tab for each topic, and inserts title of tab from axios data
    topics.forEach(topic => {
        const topicDiv = document.createElement('div');
        const topicClass = document.querySelector('.topics');
        topicDiv.classList.add('tab');
        topicDiv.textContent = topic;
        topicClass.appendChild(topicDiv);
    });
    console.log('it works', topics);
})

.catch(error => {
        console.log("Sorry, something went wrong. A team of highly trained monkeys has been dispatched to deal with this situation", error);
        
})