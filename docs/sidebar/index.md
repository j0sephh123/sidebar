## React Sidebar component

__[Url](https://clever-panini-561ffa.netlify.app/sidebar)__

## What's the point of that - the idea is to become sidebar builder component, have different themes, structure and so on.  
Since it's a SSR: 
- probably have a config file with some data, 
- have some kind of an electron or cli to modify it, 
- basically have edit mode, where one can modify different stuff - text, icons, structure, links, etc.

## Start with:
`npm i`
`npm run dev` -> 3000
If you want different port:  
`npm run dev -- -p 3001` 

### Thoughts
- bootstrap for styling, need to pick one of [these](https://bootswatch.com/minty/). Nah, let's get rid of bootstrap.
- [inspiration](https://bootsnipp.com/snippets/kl2OQ) - I don't like the look of it, but like the functionality and think it's an average starting point
- no `global state`, maybe i should add one and stop worrying about that ?
Let's try with redux
- I have used that for demo before that, so it has remains of `strapi` and `styled-components`
- no animations for now, probably the next step

### Bugs
[x] when switching from fullwidth to toggled and right menu takes the coordinates of the longer element...

### Todo
[x] toggle arrow when clicking main item 
[x] use [styled](https://styled-components.com/)
[x] Just add redux, I know it's an overkill, but why not ?
[] Get rid of bootstrap 

### Transitions
[] slide down transition when expanding

### Workflow of the component
__Entry point__ - `pages/index.js`


### Libraries already used or planning to use

__Framework__
[Next](https://nextjs.org/) - I have the least experience with this out of the three, so that's why.

__State__
[redux](https://redux.js.org/)
[redux-thunk](https://github.com/reduxjs/redux-thunk)
[next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper) - very good documentation and explanations 

__CSS__
[Styled components](https://styled-components.com/) - I used [emotion](https://emotion.sh/docs/introduction) for my youtube app, so now I want to have a bit of diversity  
[Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) - well, I started with this one, with the intention to get rid of it asap.  

__Docs__
[Vuepress](https://vuepress.vuejs.org/) - wonderful Static Site Generator and this is without modifying it yet.  

__Testing__ [React docs for that](https://reactjs.org/docs/testing.html#tools)  
[Jest](https://jestjs.io/)   
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)  

