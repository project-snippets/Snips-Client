import SNIPS from '../snippet-data.js';
import { renderSnips, fetchSnippets } from './snippets.js';

// const matchStr = (str, toMatch) => {
//   str.toLowerCase().includes(toMatch.toLowerCase());
// };

export const search = async event => {
  event.preventDefault();
  const text = event.target['search-text'].value;
  // Look through SNIPS
  /*
    Title
    Description
    Language
    Code
    */
  // Filter out SNIPS by its properties

  // TODO: Make an API call.
  const snips = await fetchSnippets();

  // TODO: Get API data

  // TODO: Use API data instead of SNIPS to filter and display

  const filteredSnips = snips.filter(
    snippet =>
      snippet.title.toLowerCase().includes(text.toLowerCase()) ||
      snippet.description.toLowerCase().includes(text.toLowerCase()) ||
      snippet.language.toLowerCase().includes(text.toLowerCase()) ||
      snippet.code.toLowerCase().includes(text.toLowerCase())

    // matchStr(snippet.title, searchText) ||
    // matchStr(snippet.description, searchText) ||
    // matchStr(snippet.language, searchText) ||
    // matchStr(snippet.code, searchText)
  );

  // load the snippets after filtering
  renderSnips(filteredSnips);
};

export default search;
