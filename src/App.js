import React from 'react'
import { Preview, Editor } from './Previewer'

function App() {
  function fullscreen(event, container) {
    const elementName = event.target.id.match(/^[A-Z]*/)
    console.log(elementName)
    const hiddenElement = container.children.filter((el) => el.className)
    console.log(hiddenElement)
  }

  return (
    <div className="appWrapper">
      <div className="editorContainer container">
        <header className="editorHeader header">
          <h2>Editor</h2>
          <nav className="actionsNav">
            <a href="" onClick={(e) => e.preventDefault()}>
              copy
            </a>
            <p id='editorFullscreen' className='fullscreenBtn'>fullscreen</p>
          </nav>
        </header>
        <Editor></Editor>
      </div>
      <div className="previewContainer container">
        <header className="previewHeader header">
          <h2>Preview</h2>
          <nav className="actionsNav">
            <a href="">print</a>
            <p id='previewFullscreen' className='fullscreenBtn'>fullscreen</p>
          </nav>
        </header>
        <Preview></Preview>
      </div>
    </div>
  )
}

export default App
