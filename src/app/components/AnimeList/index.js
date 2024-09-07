import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} alt="..." width={350} height={350} />
      <h3 className="font-bold p-4 md:text-xl text-md">{title}</h3>
    </Link>
  );
};
export default AnimeList;
