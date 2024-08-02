import { useState } from "react";
import Header from "./components/Header";
import { getData } from "./utils/data";
import NotesList from "./components/NotesList";
import AddNotes from "./components/AddNotes";
import ArchiveNotes from "./components/ArchiveNotes";

function App() {
  const [notes, setNotes] = useState(getData());
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const addNote = () => {
    const newNotes = {
      id: Math.random().toString(36).slice(2, 11),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNotes]);

    setTitle("");
    setBody("");
    setIsAdd(false);
  };

  const handleAddClick = () => {
    setIsAdd(!isAdd);
  };

  const handleDelete = (id) => {
    console.log(1);
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <AddNotes
        isAdd={isAdd}
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        handleAddClick={handleAddClick}
        addNote={addNote}
      />
      <NotesList notes={notes} handleDelete={handleDelete} />
      <ArchiveNotes />
    </div>
  );
}

export default App;
