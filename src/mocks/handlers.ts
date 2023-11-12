import { HttpResponse, http } from 'msw';

const books = {
  docs: [
    {
      title: 'Tom Sawyer, Detective',
      author_name: 'Mark Twain',
      key: 'OL54147W',
    },
    {
      title: 'Tom Sawyer Abroad',
      author_name: 'Mark Twain',
      key: 'OL413674W',
    },
    {
      title: 'The Adventures of Tom Sawyer',
      author_name: 'Mark Twain',
      key: 'OL53919W',
    },
    {
      title: "Uncle Tom's Cabin",
      author_name: 'Harriet Beecher Stowe',
      key: 'OL152161W',
    },
    {
      title: 'The History of Tom Jones',
      author_name: 'Henry Fielding',
      key: 'OL45623W',
    },
    {
      title: "Tom Brown's School Days",
      author_name: 'Thomas Hughes',
      key: 'OL26138760W',
    },
    {
      title: "Tom Brown's School Days",
      author_name: 'Thomas Hughes',
      key: 'OL2540345W',
    },
    {
      title: 'Tom Sawyer',
      author_name: 'Mark Twain',
      key: 'OL25639159W',
    },
  ],
};

export const handlers = [
  http.get('https://openlibrary.org/search.json', () => {
    return HttpResponse.json(books);
  }),
];
