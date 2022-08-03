import React from 'react'
import Markdown from 'marked-react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from './previewerSlice'
// import Lowlight from 'react-lowlight'
// import 'react-lowlight/common'

// export const renderer = {
//   code(snippet, lang) {
//     return <Lowlight key={this.elementId} language={lang} value={snippet} />
//   },
// }

export function Editor() {
  let rawText = useSelector((state) => state.previewer.raw)
  const dispatch = useDispatch()

  //set initial state
  useEffect(() => {
    const initialState = `# Markdown Previewer
You can see your **markdown** documents an make modifications to them.
   
## What can you do?

- Write books, documentation. summaries, etc.
- Organize your goals and task to do.
- Make code examples

## Features

- Organize your text with hierarchy heading.
- emphatize your text using italic and bold text.
- add blockquotes to your text.
- use ordered and unordered list in your text.
- put syntax highlighted code in your text.
- reference links and images in your code.

For more information see de [documentation]("https://www.markdownguide.org/").

> Do not reinvent the wheel

\`\`\`[javascript]
    function greeting() {
        console.log('Hello World')
    }
\`\`\`
That is all for now. Happy coding! \`Console.log("Bye World")\`

![markdown logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/640px-Markdown-mark.svg.png)
`
    dispatch(update(initialState))
  }, []) // use an empty array to dispatch only on first load :)

  return (
    <textarea
      className="content"
      onChange={(raw) => dispatch(update(raw.target.value))}
      name=""
      id="editor"
      rows="10"
      value={rawText}
    ></textarea>
  )
}

export function Preview() {
  //get raw text from redux state
  const rawText = useSelector((state) => state.previewer.raw)
  return (
    <div id="preview" className="content">
      <Markdown breaks gfm /* renderer={renderer} */>
        {rawText}
      </Markdown>
    </div>
  )
}
