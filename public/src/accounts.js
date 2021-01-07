function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}

function numberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    const borrows = book.borrows;
    borrows.forEach(borrow => {
    if (borrow.id === account.id) {
        acc++;
      }
    })
    return acc;
  },0)
  return result;
}


function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = [];
  let result = [];
  books.forEach(book => {
    const borrows = book.borrows;
    borrows.forEach(borrow => {
      if (borrow.id === account.id && borrow.returned === false) {
        borrowedBooks.push(book);
        result = borrowedBooks.map(borrowedBook => {
          const matchedAuthor = authors.find(author => author.id === borrowedBook.authorId);
          borrowedBook = {
            id: borrowedBook.id, 
            title: borrowedBook.title, 
            genre: borrowedBook.genre, 
            authorId: borrowedBook.authorId, 
            author: matchedAuthor, 
            borrows: borrowedBook.borrows,
          }
          return borrowedBook;
        })
      }
    })
  })
  return result;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
