## Overview
What I want to achieve is have the whole `svg` element on the page
and be able to pass `props` to it in order to for example `rotate` or change `color`

## Import as its own component
1. Create a file called `arrowSvg.js`
2. Paste the following code (removed stuff for simplicity)
```jsx
const arrow = ({ className, active }) => {
  return (
    <svg 
      style={{transform: active ? "rotate(0deg)" : "rotate(-90deg)"}}
      className={className} 
      >
      ..svgstuff..
    </svg>
  )
}
```
We pass props to it and are able to rotate and style it.