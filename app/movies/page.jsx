import { Suspense } from "react";

import MoviesList from "@/components/MoviesList"



export default  function Movies() {

  return (
    <>
      <h1>Movies page</h1>

      <Suspense fallback={<p>Loading... From Suspense</p>}>
      <MoviesList />
      </Suspense>

    </>
  );
}
