import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <header>
            <nav>
                <Link to='/'>LuckyGen</Link>
            </nav>
        </header>
    )
}

export default Header;