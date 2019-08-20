import { renderSnips, fetchSnippets } from './lib/snippets.js';
import { search } from './lib/search.js';

// async function init() {
//   const snippets = await fetchSnippets();
//   renderSnips(snippets);
// }

// init();

fetchSnippets().then(snips => {
  renderSnips(snips);
});

document.getElementById('search-bar').addEventListener('submit', search);

// const searchForm = document.getElementById('search-bar');
// // const searchText = document.getElementById('search-text');

// searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const searchText = event.target['search-text'].value;
//   search(searchText);
// });
