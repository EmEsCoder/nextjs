import Link from "next/link";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>dashboard</Link>
        </li>
        <li>
          <Link href={"/blog"}>blog</Link>
        </li>
        <li>
          <Link href={"/blog/settings"}>settings</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
