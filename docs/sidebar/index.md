## Sidebar component with [Next](https://nextjs.org/)

__[Url](https://clever-panini-561ffa.netlify.app/sidebar)__

## What's the point of that - the idea is to become sidebar builder component,  have different themes, structure and so on. 


## Start with:
`npm i`
`npm run dev` -> 3000
If you want different port:  
`npm run dev -- -p 3001` 

### Thoughts
- bootstrap for styling, need to pick one of [these](https://bootswatch.com/minty/). Nah, let's get rid of bootstrap.
- [inspiration](https://bootsnipp.com/snippets/kl2OQ) - I don't like the example as a whole, but it's a good starting point as functionality.
- no `global state`, maybe i should add one and stop worrying about that ?
- I have used that for demo before that, so it has remains of `strapi` and `styled-components`
- no animations for now, probably the next step

### Bugs
[x] when switching from fullwidth to toggled and right menu takes the coordinates of the longer element...

### Todo
[x] toggle arrow when clicking main item 
[] Get rid of bootstrap 
[] use [styled](https://styled-components.com/)
[] Just add redux, I know it's an overkill, but why not ?

### Transitions
[] slide down transition when expanding