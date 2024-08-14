import MoviesContainer from "./components/MoviesContainer";
import MoviesSection from "./components/MoviesSection";

export default function Home({ searchParams }) {
  return (
    <main className="p-2 bg-[#0D0D10] min-h-dvh space-y-6">
      <MoviesSection
        label="Trending movies"
        endpoint="movie/popular?language=en&page=1"
        tag="trending"
      />
      <MoviesSection
        label="Top rated"
        endpoint="movie/top_rated?language=en&page=1"
        orientation="portrait"
        tag="top"
      />
      <MoviesContainer page={searchParams?.page} />
      <div className="h-[50px]"></div>
    </main>
  );
}
