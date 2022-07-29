import React from 'react'
import { Preview, Editor } from './Previewer'
import { useDispatch, useSelector } from 'react-redux'
import { toogleFullscreen, fullscreenType } from './previewerSlice'

function App() {
    const fullscreen = useSelector(state => state.previewer.fullscreen)
    const dispatch = useDispatch()

  return (
    <div className="appWrapper" id='wrapper'>
        <div className={`editorContainer container ${fullscreen === fullscreenType.PREVIEW? " disabled" : ""}`}>
        <header className="editorHeader header">
          <h2>Editor</h2>
          <nav className="actionsNav">
            <a href="" onClick={(e) => e.preventDefault()}>
              copy
            </a>
              <p id='editorFullscreen' className='fullscreenBtn' onClick={()=> dispatch(toogleFullscreen(fullscreenType.EDITOR))}>fullscreen</p>
          </nav>
        </header>
        <Editor></Editor>
      </div>
        <div className={`previewContainer container ${fullscreen === fullscreenType.EDITOR? " disabled" : ""}`}>
        <header className="previewHeader header">
          <h2>Preview</h2>
          <nav className="actionsNav">
            <a href="">print</a>
            <p id='previewFullscreen' className='fullscreenBtn' onClick={()=> dispatch(toogleFullscreen(fullscreenType.PREVIEW))}>fullscreen</p>
          </nav>
        </header>
        <Preview></Preview>
      </div>
    </div>
  )
}

export default App
