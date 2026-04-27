"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
    const path = usePathname()
  return (
    <header>
              <div>{path}</div>
      <ul>
        <li>
          <Link className={path == "/" ? "active" : ''} href={"/"}>Home</Link>
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
