export default function Header() {
  return (
    <div className="flex justify-between p-3 items-center">
      <h1 className="text-white text-3xl font-extrabold">
        Aplikasi Daftar Catatan
      </h1>
      <div className="px-8 text-white overflow-hidden">
        <input
          type="text"
          placeholder="Ketik judul (coming soon)"
          className="rounded px-2 bg-slate-700 border border-white"
        />
      </div>
    </div>
  );
}
