import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#!">Crud APP LS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">

                        </ul>

                        <button
                            className="btn btn-outline-secondary my-2 my-sm-0"
                            onClick={() => navigate("/create-employee")}
                        >
                            Create Employee
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
