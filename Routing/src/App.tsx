import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

type State = {
  books: {
    title: string;
    author: string;
    id: string;
  }[];
  isLoading: boolean;
  error: boolean;
};

type books = {
  books: {
    title: string;
    author: string;
    id: string;
  }[];
};

class App extends React.Component {
  state: State = { books: [], isLoading: false, error: false };
  setBooks = (books: books) => {
    this.setState({ books: books });
  };
  setLoading = (isLoading: boolean) => {
    this.setState({ isLoading: isLoading });
  };
  createError = () => {
    throw new Error('test');
  };
  render() {
    return (
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Header setBooks={this.setBooks} setLoading={this.setLoading}></Header>
        <Main books={this.state.books} isLoading={this.state.isLoading}></Main>
        <button onClick={this.createError}>Error</button>
      </ErrorBoundary>
    );
  }
}

export default App;
