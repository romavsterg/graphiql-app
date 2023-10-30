import React, { Component } from 'react';
import '../styles/Main.css';

type Props = {
  books: {
    title: string;
    author: string;
    id: string;
  }[];
  isLoading: boolean;
};

export default class Main extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.isLoading ? (
          <span className="loader"></span>
        ) : (
          <div className="books-cards">
            {this.props.books.map((book) => (
              <div key={book.id} className="book-card">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
