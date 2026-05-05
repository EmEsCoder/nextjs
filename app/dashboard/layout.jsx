export default function Layout(props) {
  return (
    <>
        <div>{props.children}</div>
        <div>{props.products}</div>
        <div>{props.users}</div>
    </>
  );
}
