import React from 'react'
import { Preview, Editor } from './Previewer'
import { useDispatch, useSelector } from 'react-redux'
import { toogleFullscreen, fullscreenType } from './previewerSlice'

function App() {
  const fullscreen = useSelector((state) => state.previewer.fullscreen)
  const rawText = useSelector((state) => state.previewer.raw)
  const dispatch = useDispatch()

  return (
    <div className="appWrapper" id="wrapper">
      <div
        className={`editorContainer container ${
          fullscreen === fullscreenType.PREVIEW ? ' disabled' : ''
        } ${fullscreen === fullscreenType.EDITOR ? 'focused' : ''}`}
      >
        <header className="editorHeader header">
          <h2>Editor</h2>
          <nav className="actionsNav">
            {/* Copy button */}
            <div
              id="copyIcon"
              className="icon"
              href=""
              onClick={() => navigator.clipboard.writeText(rawText)}
              placeholder="copy to clipboard"
            ></div>
            {/* Fullscreen button */}
            <div
              id="editorFullscreen"
              className="fullscreenBtn icon "
              onClick={() => dispatch(toogleFullscreen(fullscreenType.EDITOR))}
            ></div>
          </nav>
        </header>
        <Editor></Editor>
      </div>
      <div
        className={`previewContainer container ${
          fullscreen === fullscreenType.EDITOR ? ' disabled' : ''
        } ${fullscreen === fullscreenType.PREVIEW ? 'focused' : ''}`}
      >
        <header className="previewHeader header">
          <h2>Preview</h2>
          <nav className="actionsNav">
            {/* Print button */}
            <div
              id="printIcon"
              className="icon"
              onClick={() => window.print()}
            ></div>
            {/* Fullscreen button */}
            <div
              id="previewFullscreen"
              className="fullscreenBtn icon "
              onClick={() => dispatch(toogleFullscreen(fullscreenType.PREVIEW))}
            ></div>
          </nav>
        </header>
        <Preview></Preview>
      </div>
    </div>
  )
}

export default App
