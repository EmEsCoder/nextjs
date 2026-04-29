const fetchMovies = async () => {
  const answer = await fetch("https://moviesapi.ir/api/v1/movies");
//   throw new Error("Gand Zadi VAli karet doroste...")
  const movies = await answer.json();
  const { data } = movies;
  return data;
};


export default async function Movies() {
  const movies = await fetchMovies();

  return (
    <>
        <ul>
            {movies.map((evo) => {
                return (
                    <li key={evo.id}>{evo.title}</li>
                )
            })}
        </ul>
    </>
  )
}