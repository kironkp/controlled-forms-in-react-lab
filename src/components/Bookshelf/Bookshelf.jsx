import { useState } from 'react'

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ])
  const [newBook, setNewBook] = useState({ title: '', author: '' })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewBook({ ...newBook, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newBook.title || !newBook.author) return
    setBooks([...books, newBook])
    setNewBook({ title: '', author: '' })
  }

  const handleDelete = (indexToRemove) => {
    setBooks(books.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Author
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className="bookCard" key={`${book.title}-${book.author}-${index}`}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf
