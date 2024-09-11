import Link from "next/link";

const Header = ({ LinkHref, LinkTitle, Title }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{Title}</h1>
      <Link
        href={LinkHref}
        className="md:text-xl text-sm underline hover:text-indigo-500 transition-all">
        {LinkTitle}
      </Link>
    </div>
  );
};
export default Header;
