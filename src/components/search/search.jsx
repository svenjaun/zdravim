import React from 'react';
import './search.css';

function search() {

  function searchViaSearchEngine() {
    console.log(searchEngine.url + term)
    //window.location.replace("https://www.google.com/search?q=" + term);
  }

  let term = '';

  const handleNameOnChange = (e) => {
    term = e.target.value
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchViaSearchEngine();
    }
  }

  const searchEngine = {
    name: "Google",
    url: "https://www.google.com/search?q="
  }

  return (
          <input className="inputsearch" type="text" onChange={(e) => handleNameOnChange(e)} onKeyDown={(e) => handleKeyDown(e)} placeholder={'Search on ' + searchEngine.name} />
  );

}

export default search;
