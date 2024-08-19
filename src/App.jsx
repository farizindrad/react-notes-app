import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { getAllNotes, deleteNote } from "./utils/data";
import NotFound from "./pages/NotFound";
import DetailNote from "./pages/DetailNote";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleAddNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };

  const handleArchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
    console.log(1);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                notes={notes}
                handleAddNote={handleAddNote}
                handleDelete={handleDelete}
                handleArchive={handleArchive}
              />
            }
          />
          <Route
            path="/note/:id"
            element={
              <DetailNote
                notes={notes}
                handleDelete={handleDelete}
                handleArchive={handleArchive}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
