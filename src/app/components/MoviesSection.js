import tmdbRequest from "@/utils/tmdbRequest";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import SectionButton from "./SectionButton";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import MovieCard from "./MovieCard";

export default async function MoviesSection({
  label,
  endpoint,
  orientation = "landscape",
  tag
}) {
  const trendingMovies = await tmdbRequest(endpoint);

  return (
    <section className="space-y-4 relative">
      <div className="flex justify-between">
        <h2 className="text-lg text-white font-bold">{label}</h2>
        <Link
          href="#"
          className="text-sm hover:text-white transition-all duration-300"
        >
          Sell all <span className="ml-2">❯</span>
        </Link>
      </div>
      <div
        id={tag}
        className={`carousel rounded-box w-full ${
          orientation === "portrait" ? "h-72" : "h-[400px]"
        } space-x-6`}
      >
        {trendingMovies.results.slice(0, 10).map((m) => {
          return (
            <div
              key={m.id}
              className={`carousel-item ${
                orientation === "portrait" ? "w-56" : "w-1/2"
              }`}
            >
              <MovieCard movie={m} orientation={orientation} />
            </div>
          );
        })}
      </div>
      <SectionButton tag={tag} />
    </section>
  );
}
