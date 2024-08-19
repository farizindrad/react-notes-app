import NotesItem from "./NotesList/NotesItem";
import PropTypes from "prop-types";

export default function NotesList({
  notes,
  handleDelete,
  handleArchive,
  listType,
}) {
  return (
    <>
      <span className="text-white font-bold text-2xl pl-3">
        {listType === "archive"
          ? "Daftar Catatan Arsip"
          : "Daftar Catatan Aktif"}
      </span>
      <div className="flex flex-wrap justify-center mt-5">
        {notes.length === 0 ? (
          <p className="text-white">
            {listType === "archive"
              ? "Belum ada catatan arsip."
              : "Belum ada catatan aktif, silahkan tambah catatan baru."}
          </p>
        ) : (
          notes.map((note) => (
            <NotesItem
              key={note.id}
              {...note}
              handleDelete={handleDelete}
              handleArchive={handleArchive}
            />
          ))
        )}
      </div>
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  listType: PropTypes.oneOf(["active", "archived"]).isRequired,
};
