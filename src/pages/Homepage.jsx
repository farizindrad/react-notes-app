import { getActiveNotes, getArchivedNotes } from "../utils/data";
import NotesList from "../component/NotesList";
import Header from "../component/Header";
import AddNote from "../component/AddNote";
import PropTypes from "prop-types";

export default function Homepage({
  notes,
  handleDelete,
  handleAddNote,
  handleArchive,
}) {
  const activeNotes = getActiveNotes(notes);
  const archivedNotes = getArchivedNotes(notes);

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <AddNote handleAddNote={handleAddNote} />
      <NotesList
        notes={activeNotes}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        listType="active"
      />
      <NotesList
        notes={archivedNotes}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        listType="archive"
      />
    </div>
  );
}

Homepage.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
};
