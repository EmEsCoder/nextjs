export default function MoviesLayout(props) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}