import SNIPS from './snippet-data.js';
import { renderSnips, highlightSnips } from './lib/snippets.js';
import search from './lib/search.js';

renderSnips(SNIPS);

document.getElementById('search-bar').addEventListener('submit', search);

// const searchForm = document.getElementById('search-bar');
// // const searchText = document.getElementById('search-text');

// searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const searchText = event.target['search-text'].value;
//   search(searchText);
// });
