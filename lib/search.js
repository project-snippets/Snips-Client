import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

const search = text => {
  // Look through SNIPS
  /*
    Title
    Description
    Language
    Code
    */
  // Filter out SNIPS by its properties
  const filteredSnips = SNIPS.filter(snippet => snippet.title.includes(text));

  // load the snippets after filtering
  renderSnips(filteredSnips);
};

export default search;
