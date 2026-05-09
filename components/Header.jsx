import Link from "next/link";

export default function Header() {
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
                        <Link href="/auth/login" className="btn-login">
                            Login
                        </Link>
                        <Link href="/auth/register" className="btn-register">
                            register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}