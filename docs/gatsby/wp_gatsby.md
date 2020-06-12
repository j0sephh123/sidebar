# Wordpress and Gatsby

## How to start
[clone](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-wordpress)

You need [this](https://wordpress.org/plugins/acf-to-rest-api/ for acf

[Gatsby wp plugin](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#how-to-use)

You need to configure your wp data in `gatsby-config.js`. The plugin has very good documentation on it.

## Starting
`gatsby develop`

## Confusing parts

### How to write CSS
There are a lot of [ways](https://www.gatsbyjs.org/tutorial/part-two/) to write CSS in gatsby. You need to decide for yourself. 

## How to use Redux, Global Theme and similar libraries
`gatsby-browser.js` is your friend here, write that stuff there.

## What about graphql
When gatsby makes all the requests to wp, it keeps them in a global state, which you can access with Graphql on localhost:8000/___graphql
It's very straightforward, you pick from the left menu and it creates the query for you. You can also use ctrl + space for possible commands. The documentation is on the right side.
_The tricky part_:
What confused me the most is that you can write Graphql in 2 different places.
`gatsby-node.js` - runs before creating the pages, you can create your own pages there based on wp data.
1. Access the graphql layer and pick the things you want.
2. Save the query
3. Use the query in `gatsby-node.js`  
