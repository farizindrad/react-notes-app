import NotesBody from "./NotesBody";
import NotesButton from "./NotesButton";

export default function NotesItem({
  title,
  createdAt,
  body,
  id,
  handleDelete,
}) {
  return (
    <div className="border border-color-white mx-2 w-1/5 mb-4 rounded-xl">
      <NotesBody title={title} createdAt={createdAt} body={body} />
      <NotesButton id={id} handleDelete={handleDelete} />
    </div>
  );
}
