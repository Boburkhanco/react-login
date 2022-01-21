import "./Header.scss"
import {NavLink} from "react-router-dom"
import useAuth from './../../Hook/useAuth';

function Header(){

    const [token] = useAuth()

    return(
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <NavLink to="/about" className="header__nav__list-item">About</NavLink>
                    <NavLink to="/main" className="header__nav__list-item">Let's chat</NavLink>
                    {!token && <NavLink to="/login" className="header__nav__list-item">Login</NavLink>}
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;