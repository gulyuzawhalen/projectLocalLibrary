function totalBooksCount(books) {
   let result = books.reduce((acc, book) => {
     acc++;
     return acc;
   }, 0)
   return result;
}

function totalAccountsCount(accounts) {
   let result = accounts.reduce((acc, account) => {
     acc++;
     return acc;
   }, 0)
   return result;
}

function booksBorrowedCount(books) {
  let result = books.reduce((acc, book) => {
    const borrows = book.borrows;
    borrows.forEach(borrow => {
    if (borrow.returned === false) {
        acc++;
      }
    })
    return acc;
  }, 0)
  return result;
}

function getMostCommonGenres(books) {
  let object = {};
  let array = [];
  const genres = books.map(book => book.genre);
  let results = genres.reduce((acc, genre) => {
    if (genre in acc) {
      acc[genre]++;
    } else {
      acc[genre] = 1;
    }
    object.name = acc[genre];
    object.count = acc;
    array.push(object);
  }, {});
  return array;
}


function getMostPopularBooks(books) {
  let object = {};
  let array = [];
  let result = books.forEach(book => {
    const borrows = book.borrows;
    object.name = book.title;
    object.count = borrows.reduce((acc, borrow) => acc++, 0);
    array.push(object);
  })
  console.log(array);
}


function getMostPopularAuthors(books, authors) {}
//   let object = {};
//   let array = [];
//   books.reduce((acc, book) => {
//     const author = book.authorId;
//     if (acc[author]) {
//       object.name = author;
//       object.count = acc++;
//     } else {
//       object.name = author;
//       object.count = 1;
//      }
//     if (author === authors.id)
//     if (array.length < 5) {
//     array.push(object);
//     }
//   })
//   return array;
// }

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
