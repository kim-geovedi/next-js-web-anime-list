import Link from "next/link";
import InputSearch from "./inputSearch";
const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex justify-between p-4 flex-col md:flex-row gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          CuyAnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};
export default Navbar;
