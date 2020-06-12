## How to install
`npm i gatsby-mdx @mdx-js/mdx @mdx-js/react react-live prism-react-renderer`

in `gatsby-config.js` add 
```js
plugins: [
  {
    resolve: `gatsby-mdx`,
    options: {
      extensions: [`.md`, `.mdx`]
    }
  }
]
```

## Usage
we can create `file.mdx` in `/pages/` folder and write some markdown. It will display as a normal page

In `gatsby-browser.js` 
```jsx
import React from 'react'
import {MDXProvider} from "@mdx-js/react"

const components = {
  wrapper: ({children}) => <>{children}</>
  // h1: props => <h1 style={{color: 'hotpink'}} {{...props}}>,
  // pre: props => console.log(props) || <pre {...props}> />,
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  )
}
```

Basically we can replace html elements with our custom ones ?

## React Live
[Github](https://github.com/FormidableLabs/react-live)


## Prism react renderer - syntax highlightning ? Not sure yet
[Github](https://github.com/FormidableLabs/prism-react-renderer)