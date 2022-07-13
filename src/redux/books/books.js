const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const INITIAL_STATE = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    chapter: 'Chapter 17',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    chapter: 'Introduction',
  },
];

const bookReducer = (state = INITIAL_STATE, action) => {
  const { type, book } = action;
  switch (type) {
    case ADD_BOOK: return [...state, book];
    case REMOVE_BOOK: return state.filter((b) => b.id !== book.id);
    default: return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export default bookReducer;
