import { formatDate } from "../../utils/data";
import PropTypes from "prop-types";

export default function NotesBody({ title, createdAt, body }) {
  return (
    <div className="text-white px-3 min-h-72">
      <h2 className="text-xl overflow-hidden text-ellipsis whitespace-nowrap text-blue-500">
        {title}
      </h2>
      <h3 className="text-xs">{formatDate(createdAt)}</h3>
      <h3 className="my-1 text-justify break-words">{body}</h3>
    </div>
  );
}

NotesBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
