import { getActiveNotes, getArchivedNotes } from "../utils/data";
import NotesList from "../component/NotesList";
import Header from "../component/Header";
import AddNote from "../component/AddNote";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Homepage({
  notes,
  handleDelete,
  handleAddNote,
  handleArchive,
  listType,
}) {
  // const activeNotes = getActiveNotes(notes);
  // const archivedNotes = getArchivedNotes(notes);

  return (
    <div className="bg-slate-900 min-h-screen pb-6">
      <Header />
      {listType === "active" && <AddNote handleAddNote={handleAddNote} />}
      <NotesList
        notes={notes}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        listType={listType}
      />
      {listType === "active" && (
        <Link to="/archive">
          <span className="text-white font-bold text-2xl pl-3">
            Lihat Arsip
          </span>
        </Link>
      )}
      {listType === "archive" && (
        <Link to="/">
          <button className="text-white font-bold text-2xl pl-3">
            Kembali
          </button>
        </Link>
      )}
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
