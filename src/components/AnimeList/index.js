import Image from "next/image";
import Link from "next/link";
const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((data) => {
        return (
          <div key={data.mal_id} className="shadow-xl">
            <Link href={`/${data.mal_id}`} className="cursor-pointer">
              <Image
                src={data.images.webp.image_url}
                alt="..."
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
              />
              <h3 className="font-bold p-4 md:text-xl text-md">{data.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default AnimeList;
