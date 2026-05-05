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
    </ul>
  );
}
