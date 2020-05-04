import { getCollection, getOne } from '../api'
import { Nav } from '../components/Nav';

function Index() {


  return (
    <>
      <Nav />
      <div>
        <h3>Ideas</h3>
        <ul>
          <li>Pick appropriate icons from <a href="https://fontawesome.com/icons">fa</a></li>
          <li>
            <a 
            target="_blank"
            href="https://redux-toolkit.js.org/tutorials/intermediate-tutorial">
              rotate the arrow in the main list
            </a>
          </li>
          <li>I cant say that I particularly enjoy the animation on the arrow in Food</li>
        </ul>
      </div>
    </>
  )
}

// export async function getStaticProps() {
//   const books = (await getCollection("books")).data;
//   console.log(books);

//   return {
//     props: ({
//       books
//     })
//   }
// }

export default Index;