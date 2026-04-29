import { Suspense } from "react";
import styles from "./movies.module.css"

import MoviesList from "@/components/MoviesList"



export default  function Movies() {

  return (
    <>
      <h1 className={styles.bgMovie}>Movies page</h1>
      <p style={{color:"green",fontSize:"20px"}}>Testing Js-in_css</p>

      <Suspense fallback={<p>Loading... From Suspense</p>}>
      <MoviesList />
      </Suspense>

    </>
  );
}
