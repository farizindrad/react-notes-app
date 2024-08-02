export default function NotesBody({ title, createdAt, body }) {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="text-white px-3 min-h-72">
      <h2 className="text-xl font-black my-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </h2>
      <h3 className="text-xs">{formatDate(createdAt)}</h3>
      <h3 className="my-1 text-justify break-words">{body}</h3>
    </div>
  );
}
