function totalBooksCount(books) {
   return books.length;
}

function totalAccountsCount(accounts) {
   return accounts.length;
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
  let array = [];
  const genres = books.map(book => book.genre);
  let result = genres.reduce((acc, genre) => {  
    if (genre in acc) {
      acc[genre]++;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});
  for (let item in result) {
    let object = {};
    object.name = item;
    object.count = result[item];
    if (array.length < 5) {
      array.push(object);
    }
  }
   return array.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1);
}


function getMostPopularBooks(books) { 
  let array = [];
  books.forEach(book => {
    let object = {};
    object.name = book.title;
    const borrows = book.borrows;
    object.count = borrows.reduce((acc, borrow) => {
      acc++;
      return acc;
    }, 0)
      array.push(object);
  })
  array.sort((nameA, nameB) => nameA.count > nameB.count ? -1 : 1);
  array.length = 5;
  return array;  
}

function getMostPopularAuthors(books, authors) {
  let array = [];
  const fullNames = authors.filter(author => author.name = `${author.name.first} ${author.name.last}`);
  books.forEach(book => {
    let object = {};
    const borrows = book.borrows; 
    fullNames.find(fullName => {
      if (book.authorId === fullName.id) {
      object.name = fullName.name;
      }
    })
    object.count = borrows.reduce((acc, borrow) => {
      if (book.authorId) {
        acc++;
      }
    return acc;
    }, 0)
    array.push(object);
  })
  array.sort((nameA, nameB) => nameA.count > nameB.count ? -1 : 1);
  array.length = 5;
  return array; 
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
