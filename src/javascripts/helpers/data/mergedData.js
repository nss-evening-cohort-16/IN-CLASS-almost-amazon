import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// const viewBookDetails = (bookFirebasekey) => new Promise((resolve, reject) => {
//   getSingleBook(bookFirebasekey)
//     .then((bookObject) => {
//       getSingleAuthor(bookObject.author_id)
//         .then((authorObject) => {
//           resolve({ authorObject, ...bookObject });
//         });
//     }).catch(reject);
// });

const viewBookDetails = (bookFirebasekey) => (async () => {
  const book = await getSingleBook(bookFirebasekey);
  const authorObject = await getSingleAuthor(book.author_id);

  return { authorObject, ...book };
})().catch(console.warn);

export default viewBookDetails;
