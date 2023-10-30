import axios from 'axios';
import React, { Component } from 'react';

type State = {
  search: string;
  isLoading: boolean;
};

type book = {
  title: string;
  author_name: string;
  key: string;
};

interface books {
  books: {
    title: string;
    author: string;
    id: string;
  }[];
}

type Props = {
  setBooks: (books: books) => void;
  setLoading: (isLoading: boolean) => void;
};

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state: State = {
    search: localStorage.getItem('search') || '',
    isLoading: true,
  };

  componentDidMount = async () => {
    this.setState({ search: localStorage.getItem('search') || '' });
    this.props.setLoading(true);
    const res = await axios.get(
      this.state.search !== ''
        ? `https://openlibrary.org/search.json?q=${this.state.search}&limit=6`
        : 'https://openlibrary.org/search.json?q=*&limit=7'
    );
    const data = res.data.docs;
    const books: books = data.map((book: book) => {
      return {
        title: book.title,
        author: book.author_name[0],
        id: book.key,
      };
    });
    this.props.setBooks(books);
    this.props.setLoading(false);
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
    localStorage.setItem('search', e.target.value);
  };

  searchBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.setLoading(true);
    const res = await axios.get(
      this.state.search !== ''
        ? `https://openlibrary.org/search.json?q=${this.state.search}&limit=6`
        : 'https://openlibrary.org/search.json?q=*&limit=6'
    );
    const data = res.data.docs;
    const books: books = data.map((book: book) => {
      return {
        title: book.title,
        author: book.author_name[0],
        id: book.key,
      };
    });
    this.props.setBooks(books);
    this.props.setLoading(false);
  };

  render() {
    return (
      <header>
        {}
        <nav>
          <form onSubmit={this.searchBook}>
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="type a name of the book"
              name="search"
            />
            <button type="submit">Search</button>
          </form>
        </nav>
      </header>
    );
  }
}
