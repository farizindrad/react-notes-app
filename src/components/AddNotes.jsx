import { useState } from "react";

export default function AddNotes({
  isAdd,
  title,
  body,
  setTitle,
  setBody,
  handleAddClick,
  addNote,
}) {
  const maxTitleLength = 50;
  const maxBodyLength = 213;

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= maxTitleLength) {
      setTitle(newTitle);
    }
    // setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    const newBody = e.target.value;
    if (newBody.length <= maxBodyLength) {
      setBody(newBody);
    }
    // setTitle(e.target.value);
  };
  const handleAddNote = () => {
    if (title && body) {
      addNote();
    } else {
      alert("Jangan mager ngetik");
    }
  };

  return (
    <div className="flex  flex-col justify-center items-center text-white">
      <div className="flex">
        <h1>Tambahkan Catatan</h1>
        <button
          className="ml-4 border w-[3rem] rounded-xl hover:bg-white hover:text-black hover:border-color-black"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
      {isAdd && (
        <div className="flex flex-col mt-2 w-full px-8">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Tambahkan tag judul"
            className="bg-slate-700 p-2 rounded-md"
          />
          <p className="text-gray-400">
            Sisa karakter: {maxTitleLength - title.length}
          </p>
          <textarea
            value={body}
            onChange={handleBodyChange}
            placeholder="Tulis catatan anda Disini"
            name=""
            id=""
            className="bg-slate-700 p-2 mt-2 rounded-md"
          />
          <p className="text-gray-400">
            Sisa karakter: {maxBodyLength - body.length}
          </p>
          <button
            onClick={handleAddNote}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Simpan
          </button>
        </div>
      )}
    </div>
  );
}
