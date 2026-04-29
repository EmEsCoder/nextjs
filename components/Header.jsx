import Link from "next/link";

export default function Header() {
  return (
    <ul>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/movies"}>movies</Link>
      </li>
      {/* <li>
        <Link href={"/products"}>products</Link>
      </li> */}
    </ul>
  );
}
