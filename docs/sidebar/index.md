## React Sidebar component

__[Url](https://epic-carson-032219.netlify.app/)__

## Why is there a documentation for something so small ?
Too much past trauma of looking at code without any idea what it does, I'm not even talking about inside the code, I just want 1 sentence what's the purpose of a code chunk..

## Why is there a documentation for something so small ?
Too much past trauma of looking at code without any idea what it does, I'm not even talking about inside the code, I just want 1 sentence what's the purpose of a code chunk..

## What's the point of that - the idea is to become sidebar builder component, have different themes, structure and so on.  
Since it's a SSR: 
- probably have a config file with some data, 
- have some kind of an __electron__ or __repl__ to modify it, 
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

### Basic explanation
__Entry point__ - `pages/index.js`  
- actions file names end with __A__
- reducers file names end with __R__
- elements __E__

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

## Ideas
Created a `repl` folder where I intend to use [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) to generate `sidebar.json`.  
I'm still planning that. I've done few other apps with Inquirer, but didn't like my code structure in any of them, so now I intend to plan carefully before including it.

### Todo
[x] toggle arrow when clicking main item  
[x] use [styled](https://styled-components.com/)  
[x] Just add redux, I know it's an overkill, but why not ?  
[x] remove reduntant `imports`  
[x] use better names, i.e _FlyingMenu_ instead of __SecondMenu__  
[] Get rid of `bootstrap`   

### Bugs
[x] when switching from fullwidth to toggled and right menu takes the coordinates of the longer element...  
[] When going from fullwidth to collapsed, the flying menu is appearing instantly before the container has slided to the end - not looking good  
[] On collapsed menu, when clicking on the bars, the text appears instantly and it starts sliding from there, not good looking either.  

### Transitions
[] slide down transition when expanding