"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import tmdbRequest from "@/utils/tmdbRequest";
import MovieCard from "./MovieCard";

export default function MoviesContainer({ page }) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const pageNum = parseInt(page) || 1;
  useEffect(() => {
    tmdbRequest(`movie/popular?language=en&page=${pageNum}`).then((data) =>
      setMovies(data.results)
    );
    if (pageNum > 1) document.getElementById("movies").scrollIntoView();
  }, [pageNum]);
  return (
    <div id="movies" className="space-y-4">
      <h2 className="text-lg text-white font-bold">Check out new movies</h2>
      <div className="grid grid-cols-4 h-max gap-5 p-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} orientation="portrait" single={true} />
          </div>
        ))}
      </div>
      <div className="join flex justify-center">
        <button
          className="join-item btn"
          onClick={() => {
            if (pageNum > 1) router.push(`?page=${pageNum - 1}`);
          }}
        >
          «
        </button>
        <button className="join-item btn">Page {pageNum}</button>
        <button
          className="join-item btn"
          onClick={() => router.push(`?page=${pageNum + 1}`)}
        >
          »
        </button>
      </div>
    </div>
  );
}
