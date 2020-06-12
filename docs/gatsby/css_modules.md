## Motivation
I'm writing this, because we decided to use them in our current project.
I can't say that I would be writing this otherwise.

[In Gatsby](https://www.gatsbyjs.org/docs/css-modules/)
[Their Github](https://github.com/css-modules/css-modules) - almost nothing

## How to use
1. Create `race.module.css` and write normal css
2. In your React Component: `import s from './race.module.css'`
3. Use in your elements: `<div className={s.race_card}>`
4. It attaches `racesListTop-module--race_top_title--29oIl` - which is good for recognizing from the outside where is this css written and also its name.

## Media
**media**
*other*

## ::after - this is working
```css
.odd::after {
    content: 'PLACE BET';
    font-size: 7px;
    font-family: ProximaNovaA-Regular;
    display: block;
    white-space: nowrap;
}
```
