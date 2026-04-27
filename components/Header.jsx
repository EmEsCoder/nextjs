"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Header() {
    const path = usePathname()
    const router = useRouter()
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
      <div>
        <br />
        <hr />
        <button onClick={() => router.push('/dashboard') }>going to dashboard</button>
      </div>
    </header>
  );
}

export default Header;
