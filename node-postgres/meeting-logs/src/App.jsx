import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getListNotes') // Corrected route
      .then(res => res.json())
      .then(data => {
        setNotes(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/createNotes', { // Corrected POST route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, content }),
    })
      .then(res => res.json())
      .then(data => {
        setNotes([...notes, data]); // Update list with new note
        setDate('');
        setContent('');
        window.location.reload();
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/deleteNotes/${id}`, { // Corrected DELETE route
      method: 'DELETE',
    })
      .then(res => {
        if (res.status === 200) {
          setNotes(notes.filter(note => note.id !== id));
        } else {
          console.error('Error deleting note');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <div className="App">
        <h1>Write a note</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            <h3>Note:</h3>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>

      <div className="saved-notes">
        <h2>Saved Notes:</h2>
        <ul>
          {notes.map((note,) => (
            <li key={note.id}>
              <div>
                <strong>{new Date(note.date).toISOString().split('T')[0]}:</strong>
                <div className='note-content'>
                  {note.content}
                </div>
              </div>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
