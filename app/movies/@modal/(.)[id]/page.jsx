import Image from "next/image";

const fetchMovie = async (id) => {
  const res = await fetch(`http://moviesapi.ir/api/v1/movies/${id}`);
  const answer = await res.json();

  return answer;
};

export default async function Movie({ params }) {
  // ✅ اضافه کردن async
  const { id } = await params; // ✅ await کردن params
  const movie = await fetchMovie(id);
  return (
    <>
      <div style={{ background: "yellow", padding: "0.5rem" }}>
        ⚡ حالت اینترسپت (از صفحه لیست وارد شده‌اید)
      </div>

      <ul>
        <li>
          <Image
            src={movie.poster}
            width={200}
            height={200}
            alt="movie"
          ></Image>
        </li>
        <li>{movie.title}</li>
        <li>{movie.writer}</li>
        <li>{movie.year}</li>
      </ul>
    </>
  );
}
