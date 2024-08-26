import './navbar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <nav>
                <div>Logo</div>
                <ul className='center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/message">Message</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;