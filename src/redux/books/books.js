const ADD_BOOK = 'ADDBOOK';
const REMOVE_BOOK = 'REMOVEBOOK';
const INITIAL_STATE = [];

export default bookReducer = (state = INITIAL_STATE, action) => {
    const { type, book } = action;
    switch (type) {
        case ADD_BOOK: return [...state, book];
        case REMOVE_BOOK: return state.filter(b => b.id !== book.id);
        default: return state;
    }
}

export const addBook = book => ({
    type: ADD_BOOK,
    book
});

export const removeBook = book => ({
    type: REMOVE_BOOK,
    book
});