import React from 'react'
import Markdown from 'marked-react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from './previewerSlice'

export function Editor() {
  let rawText = useSelector((state) => state.previewer.raw)
  const dispatch = useDispatch()
  return (
    <textarea
      onChange={(raw) => dispatch(update(raw.target.value))}
      name=""
      id="editor"
      cols="30"
      rows="10"
      value={rawText}
    ></textarea>
  )
}

export function Preview() {
  const rawText = useSelector((state) => state.previewer.raw)
  return (
    <div>
      <Markdown id="preview">{rawText}</Markdown>
    </div>
  )
}
