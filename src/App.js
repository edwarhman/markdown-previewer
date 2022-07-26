import React from 'react';
import {marked } from 'marked'
import Markdown from 'marked-react'
function App() {
    console.log(marked)
  return (
    <div className="content">
      <Markdown>
        {"# Marked title"} 
      </Markdown>
    </div>
  );
}

export default App;
