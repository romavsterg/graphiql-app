import React from 'react';
import '../styles/Main.css';

type books = {
  title: string;
  author: string;
  id: string;
}[];

type Props = {
  name: string;
};

// const Result = (props: Props) => {
const Result = () => {
  return <>result</>;
  // <div className="container">
  //   {props.isLoading ? (
  //     <span className="loader"></span>
  //   ) : (
  //     <div className="books-cards">
  //       {props.books.map((book) => (
  //         <div key={book.id} className="book-card">
  //           <h3 className="book-title">{book.title}</h3>
  //           <p className="book-author">{book.author}</p>
  //         </div>
  //       ))}
  //     </div>
  //   )}
  // </div>
};

export default Result;
