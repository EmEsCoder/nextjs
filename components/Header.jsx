"use client";

import { context } from "@/app/context/authContext";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
  const { name } = useContext(context);
  // console.log(name);
  
  

  return (
    
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          webprog.io
        </Link>
        <button className="menu-btn" type="button">
          <span className="menu-icon"></span>
        </button>
        <div className="nav-links">
          <ul className="nav-menu">
            <li>
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts" className="nav-link">
                Posts
              </Link>
            </li>
          </ul>

          <div className="auth-buttons">
            {name ? (
              <>
                <div className="user-info">
                  <span className="user-name">{name?.name}</span>
                  <button className="logout-btn">Logout</button>
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="btn-login">
                  Login
                </Link>
                <Link href="/auth/register" className="btn-register">
                  register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
