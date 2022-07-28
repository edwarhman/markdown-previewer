import React from 'react'
import { Preview, Editor } from './Previewer'

function App() {
  return (
    <div className="appWrapper">
      <div className="editorContainer container">
        <header className="editorHeader header">
          <h2>Editor</h2>
          <nav className="actionsNav">
            <a href="" onClick={(e) => e.preventDefault()}>
              copy
            </a>
            <p>fullscreen</p>
          </nav>
        </header>
        <Editor></Editor>
      </div>
      <div className="previewContainer container">
        <header className="previewHeader header">
          <h2>Preview</h2>
          <nav className="actionsNav">
            <a href="">print</a>
            <p>fullscreen</p>
          </nav>
        </header>
        <Preview></Preview>
      </div>
    </div>
  )
}

export default App
