export default function Header() {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="logo">
                    webprog.io
                </a>
                <button className="menu-btn" type="button">
                    <span className="menu-icon"></span>
                </button>
                <div className="nav-links">
                    <ul className="nav-menu">
                        <li>
                            <a href="/" className="nav-link active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/posts" className="nav-link">
                                Posts
                            </a>
                        </li>
                    </ul>

                    <div className="auth-buttons">
                        <a href="/auth/login" className="btn-login">
                            Login
                        </a>
                        <a href="/auth/register" className="btn-register">
                            register
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}