export default function NotesButton({ id, handleDelete }) {
  const handleButtonClick = () => {
    alert("Comingsoon");
  };

  return (
    <div className="flex">
      <button
        className="button w-full border-t text-xl p-1 border-r text-white hover:text-black"
        onClick={() => handleDelete(id)}
      >
        Remove
      </button>
      <button
        className="button w-full border-t text-xl p-1 text-red-600 hover:text-white"
        onClick={handleButtonClick}
      >
        Archive
      </button>
    </div>
  );
}
