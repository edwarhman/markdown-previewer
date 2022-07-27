import React from 'react'
import Markdown from 'marked-react'

export function Editor() {
  return <textarea name="" id="" cols="30" rows="10"></textarea>
}

export function Previewer() {
  return (
    <div>
      <Markdown>{/* content there */}</Markdown>
    </div>
  )
}
