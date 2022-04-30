import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTopRatedMovies, movie } from "../services/hooks/useFilmes";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [topRated, setTopRated] = useState<movie[] | undefined>(undefined);

  useEffect(() => {
    const obterTopRated = async () => {
      const response = await getTopRatedMovies(1);
      console.log(response);
      setTopRated(response.results);
    };

    console.log(topRated);
    obterTopRated();
    console.log(topRated);
  }, []);

  return (
    <div>
      Teste
      <div>
        {topRated &&
          topRated.map((movie) => <p key={movie.id}>{movie.title}</p>)}
      </div>
    </div>
  );
}
