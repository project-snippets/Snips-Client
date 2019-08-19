import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

const matchStr = (str, toMatch) => {
  str.toLowerCase().includes(toMatch.toLowerCase());
};

export const search = event => {
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
  const filteredSnips = SNIPS.filter(
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
