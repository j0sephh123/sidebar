import { getCollection, getOne } from "../../api";
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
`;

function Book(data) {
  // const { book } = data;

  return <>
  zzz
    {/* <Title>{book.title} {book.author}</Title> */}

  </>
}

// export async function getStaticPaths() {
//   const books = (await getCollection("books")).data;
//   const paths = books.map(book => `/books/${book.id}`)

//   return { paths, fallback: false }
// }

// export async function getStaticProps({params}) {
//   console.log('getStaticProps');


//   const book = (await getOne("books", params.id)).data;
//   // console.log(books);

//   return {
//     props: ({
//       book
//     })
//   }
// }

export default Book;