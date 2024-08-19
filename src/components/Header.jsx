import Search from "./Header/Search";
import Title from "./Header/Title";

export default function Header() {
  return (
    <div className="flex justify-between p-3 items-center">
      <Title />
      <Search />
    </div>
  );
}
