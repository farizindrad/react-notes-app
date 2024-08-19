import NotesItem from "./NoteList/NotesItem";

export default function NotesList({ notes, handleDelete }) {
  return (
    <div>
      <span className="text-white font-bold text-2xl pl-3">Catatan</span>
      <div className="flex flex-wrap justify-center mt-5">
        {notes.length === 0 ? (
          <p className="text-white">
            Belum ada catatan, silahkan tambah catatan baru.
          </p>
        ) : (
          notes.map((note) => (
            <NotesItem key={note.id} {...note} handleDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
}
