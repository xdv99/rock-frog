import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export default function MovieCard({
  movie,
  orientation = "landscape",
  single = false
}) {
  return (
    <div
      className={`relative bg-cover bg-center rounded-3xl w-full cursor-pointer ${
        single && "h-[400px]"
      }`}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${
          orientation === "portrait" ? movie.poster_path : movie.backdrop_path
        }')`
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/5 via-black/10 to-black/70"></div>
      {orientation === "portrait" && (
        <div className="bg-slate-900 bg-opacity-90 rounded-full p-1 px-2 absolute top-3 left-2 flex items-center space-x-2">
          <FaStar color="#FDC726" size={12} />
          <p className="text-xs">{parseFloat(movie.vote_average).toFixed(1)}</p>
        </div>
      )}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3
          className={`text-white ${
            orientation === "portrait" ? "text-md" : "text-2xl"
          } font-bold`}
        >
          {movie.title}
        </h3>
        <div
          className={
            orientation === "landscape" ? "flex justify-between" : undefined
          }
        >
          {/* Details */}
          <div>
            <p className={orientation == "portrait" ? "text-xs" : undefined}>
              {new Date(movie.release_date).getFullYear()}
            </p>
            {orientation === "landscape" && (
              <div className="flex space-x-2">
                <Image src="imdb.svg" height={20} width={30} alt="imdb" />
                <p>{parseFloat(movie.vote_average).toFixed(1)} rating</p>
              </div>
            )}
          </div>
          {/* Actions */}
          <div
            className={`flex items-center space-x-2 ${
              orientation === "portrait" && "justify-between mt-2"
            }`}
          >
            <button
              className={`${
                orientation === "portrait"
                  ? "py-1 px-2 text-[.8rem]"
                  : "py-3 px-4"
              } bg-[#eb1b2289] text-white rounded-full border-none `}
            >
              Watch now
            </button>
            <button
              className={`${
                orientation === "portrait" ? "p-2 text-[1rem]" : "p-3"
              } bg-[#ffffff3a] text-white rounded-full border-none`}
            >
              <IoMdAdd size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
