// state argument is not application state, only the state
// this reducer is responsible for
// undefined, argument settle to null
export default function(state = null , action) {
  // care about action
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  // do not care about action
  return state;
}
