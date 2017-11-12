import React, { Component } from 'react';
//react-redux is glue between react and redux libraries
//it makes connect work
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  // domn container,can not communcate
  render() {
    //console.log(this.props.asdf)  // -> '123'
    return (
      <ul className="list-group col-sm-4" >
        {this.renderList()}
      </ul>
    )
  }
}

// GLUE between react and redux
// whenever application changes,booklist components will rerender
function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return {
    // refer to this.props.books
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the booklist container
function mapDispatchToProps(dispatch) {
  // Whenever selectbook is called, the result should be passed
  // to all of our reducers

  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//connect function and components to produce container
//promote booklist from component to a container
export default connect(mapStateToProps, mapDispatchToProps) (BookList);
