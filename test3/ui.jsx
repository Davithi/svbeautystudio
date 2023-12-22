import React from 'react';
import {render}  from 'react-dom';

function App() {


  return (
    <div>
      <h1>Hello Figma!</h1>
      <button onClick={() => parent.postMessage({ pluginMessage: 'do-something' }, '*')}>
        Do Something
      </button>
    </div>
  );
}

render(<App />, document.getElementById('app'));