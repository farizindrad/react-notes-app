import PropTypes from "prop-types";

export default function NotesButton({
  id,
  handleDelete,
  handleArchive,
  isArchived,
}) {
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
        onClick={() => handleArchive(id)}
      >
        {isArchived ? "Unarchive" : "Archive"}
      </button>
    </div>
  );
}

NotesButton.propTypes = {
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};
