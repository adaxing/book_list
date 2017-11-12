export function selectBook(book) {
  // selectbook is an actioncreator, it needs to return an actioncreator
  // an object with a type property.
  return {
    // always upper case + string
    type: 'BOOK_SELECTED',
    payload: book
  };
}
