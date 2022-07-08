import '../css/AddBook.css';

const AddBook = () => (
  <div className="Addbook-form-holder">
    <h2 className="Form-title">ADD NEW BOOK</h2>
    <form className="Add-book-form">
      <input className="Form-control Title-add" type="text" placeholder="Book title" required />
      <input className="Form-control Book-author-input" type="text" placeholder="Author" required />
      <button type="submit" className="Button-primary-big">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
