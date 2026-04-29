"use client";

export default function Error({ error, reset }) {
  return (
    <>
     {/* <h1>Errooooor...</h1> */}
      <h1>{error.message}</h1>
      <br />
      <button onClick={reset}>Try Again ...</button>
    </>
  );
}
