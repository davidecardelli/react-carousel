export default function TheHeader() {

    return (
        <header className="bg-primary">
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <a className="navbar-brand text-uppercase text-white fw-bold p-2" href="#">Il mio blog</a>

                    <button className="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon color-white"></span>
                    </button>

                    <div className="collapse navbar-collapse flex-grow-0 p-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-uppercase text-white fw-bold" aria-current="page" href="#">Post</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-uppercase text-white fw-bold" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active text-uppercase text-white fw-bold" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}