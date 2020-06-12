## Intro
[In Gatsby](https://www.gatsbyjs.org/docs/styled-components/)
[Site](https://styled-components.com/)

## Packages to install
`npm i gatsby-plugin-styled-components styled-components babel-plugin-styled-components`

## Configure
in `gatsby-config.js` 
`plugins: ['gatsby-plugin-styled-components']`

## Usage
`import styled from "styled-components"`
```js
const Container = styled.div({
  width: 300,
  background: '#f3f8ff',
});
```

Then simply use it instead of `<div>` for example

## Passing props

__This seems to be working__

```js

// in the component itself
<Topic active={active}>...

// somewhere where we define this... 
const Topic = styled.div({
  textDecoration: ({color}) => color === "red" ? "underline" : "none"
});
```

## Theme
in `gatsby-browser.js`

```js
const theme = {
  colors: {
    black: "#34495e",
    green: "#42b983",
    code: "#e96900",
    code_bg: "#f8f8f8",
  },
}

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}
```

in a component:
```js
const Topic = styled.div({
  color: ({active, theme}) => active ? 
    theme.colors.black : theme.colors.green,
});
```

## Getting the tehem without styled components
[Link](https://styled-components.com/docs/advanced#getting-the-theme-without-styled-components)













