function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let array = [];
  let rented = [];
  let returned = [];
  books.forEach(book => {
    const borrows = book.borrows;
    if (borrows.some(borrow => borrow.returned === false)) {
      rented.push(book);
    } else {
      returned.push(book);
    }     
    })
  array.push(rented, returned);
  return array;
}

function getBorrowersForBook(book, accounts) {
  let array = [];
  let result = {};
  const borrows = book.borrows;
  borrows.forEach(borrow => {
    accounts.forEach(account => {
      if (account.id === borrow.id) {
        result = {
          id: borrow.id,
          returned: borrow.returned,
          picture: account.picture,
          age: account.age,
          name: {
          first: account.name.first,
          last: account.name.last,
          },
          company: account.company,
          email: account.email,
          registered: account.registered,
        }
        if (array.length < 10) {
        array.push(result);
        }
      }
    })  
  })
  return array;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
