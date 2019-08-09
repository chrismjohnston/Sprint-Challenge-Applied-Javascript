// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-Container component

function Header() {
  const header = document.createElement('div');
  const date = document.createElement('span');
  const head = document.createElement('h1');
  const temp = document.createElement('span');

  //create classes for each header element with a class
  header.classList.add('header');
  date.temp.classList.add('date');
  temp.classList.add('temp');

  //create date, header, and temp reading content
  date.textContent = 'SMarch 28, 2019';
  head.textContent = 'Lambda Times';
  temp.textContent = '98°';

  //create order for elements
  header.appendChild(date);
  header.appendChild(head);
  header.appendChild(temp);

  return header;
}

//mount the content to the page
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header())
