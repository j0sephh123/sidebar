## What does it do
A simple tooltip component - had trouble with vanilla styles...

## Website
[Github](https://github.com/wwayne/react-tooltip)
[Page](https://wwayne.github.io/react-tooltip/)

## Installation
`react-tooltip`

## Minimal 
```jsx
<div className="tooltip">
  <ReactTooltip />
  <TooltipSVG 
    data-effect="solid"
    data-place="bottom"
    data-tip={tooltip} />
</div>
```

`data-tip` is just the text to appear on the tooltip.
The properties are very well described on their documentation
In this case when we hover on `<TooltipSVG />` component we achieve the result
```css
.tooltip {
  position: relative;
  display: inline-block;
  margin-left: 5px;
  margin-top: 3px;
}
```
We have this for the tooltip class just for reference in the current case, nothing more





