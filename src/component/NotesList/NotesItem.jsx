import { Link } from "react-router-dom";
import NotesBody from "./NotesBody";
import NotesButton from "./NotesButton";
import PropTypes from 'prop-types';


export default function NotesItem({
  id,
  title,
  body,
  createdAt,
  handleDelete,
  handleArchive,
  archived,
}) {
  return (
    <div className="border border-color-white mx-2 w-1/5 mb-4 rounded-xl">
      <Link to={`/note/${id}`}>
        <NotesBody title={title} createdAt={createdAt} body={body} />
      </Link>
      <NotesButton
        id={id}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        isArchived={archived}
      />
    </div>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};
