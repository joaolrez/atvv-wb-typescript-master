import 'materialize-css/dist/css/materialize.min.css'
import '../styles/nav.css'
import { Link } from 'react-router-dom';



function Navbar (){ 

    return (
        <>
            <nav className='menu'>
                <div className="nav-wrapper">
                    <Link className='brand-logo' to="">WB</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/cadastro">Cadastro</Link></li>
                        <li><Link to="/">Cliente</Link></li>
                    </ul>
                </div>
            </nav>
        </>

    )

}

export default Navbar;