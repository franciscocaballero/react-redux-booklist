import React, { Component } from 'react';
import { connect } from 'react-redux'; //-> glue between react /redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
renderList(){
  return this.props.books.map((book) => {
    return (
      <li
      key={book.title}
      onClick={ () => this.props.selectBook(book)}
      className='list-group-item'>
      {book.title}
      </li>
    );
  });
}
  render(){
    return (
      <ul className='list-group col-sm-4'>
          {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of Booklist
  return {
    books: state.books
  };
}

// Abything returned from this function will end up as props
// on the Booklist contaner
function mapDispatchToProps(dispatch){
  ////Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//Promote BookList from a componenet to a contianer - is needs to know
// about this new dispatch method, selectBook. Make it available
// as props .
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
