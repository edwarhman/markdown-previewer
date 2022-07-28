import React from 'react'
import Markdown from 'marked-react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from './previewerSlice'

export function Editor() {
  let rawText = useSelector((state) => state.previewer.raw)
  const dispatch = useDispatch()

  useEffect(() => {
    const initialState = `# Markdown Previewer
You can see your md documents an make modifications
   
## things to do
- add copy  button
- add print button
- add fullscreen buttons
- fix dynacmic width of sections
  
That is all for now. Happy coding!`
    dispatch(update(initialState))
  }, [])

  return (
    <div>
      <textarea
        className="content"
        onChange={(raw) => dispatch(update(raw.target.value))}
        name=""
        id="editor"
        rows="10"
        value={rawText}
      ></textarea>
    </div>
  )
}

export function Preview() {
  const rawText = useSelector((state) => state.previewer.raw)
  return (
    <div id="preview" className="content">
      <Markdown>{rawText}</Markdown>
    </div>
  )
}
