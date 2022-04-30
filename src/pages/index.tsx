import { useEffect, useState } from "react";
import { getTopRatedMovies, movie } from "../services/hooks/useFilmes";

export default function Home() {
  const [topRated, setTopRated] = useState<movie[] | undefined>(undefined);

  useEffect(() => {
    const obterTopRated = async () => {
      const response = await getTopRatedMovies(1);
      setTopRated(response.movies);
    };

    obterTopRated();
  }, []);

  return (
    <div>
      Teste
      <div>
        {topRated &&
          topRated.map((movie) => (
            <div key={movie.id} style={{ marginBottom: "16px" }}>
              <img src={movie.poster_path}></img>
              <strong>{movie.title}</strong>
            </div>
          ))}
      </div>
    </div>
  );
}
