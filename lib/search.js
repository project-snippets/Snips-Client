import SNIPS from '../snippet-data.js';

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
  console.log(filteredSnips);

  // load the snippets after filtering
};

export default search;
