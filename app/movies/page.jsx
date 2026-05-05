import Image from "next/image";
import Link from "next/link";

const fetchMovies = async () => {
  const res = await fetch("http://moviesapi.ir/api/v1/movies");
  const answer = await res.json();
  const { data } = answer;
  return data;
};

export default async function Movies() {
  const movies = await fetchMovies();
return (
    <div style={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "2rem",
  padding: "1rem"
}}>
  {movies.map((evo) => (
    <div key={evo.id} style={{
      textAlign: "center"
    }}>
      <Link href={`/movies/${evo.id}`}>
        <Image 
          src={evo.poster} 
          width={250} 
          height={350} 
          alt={evo.title}
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </Link>
    </div>
  ))}
</div>
)
}
