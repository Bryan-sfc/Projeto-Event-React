import "./Header.css";
import Logo from "../../assets/img/Logo.svg";
import Icone from "../../assets/img/Administracao.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                <Link to="/" className="logo_header">
                    <img src={Logo} alt="Logo do Events" />
                </Link>

                <nav className="nav_header">
                    <Link href="" className="link_header" to="/home">Home</Link>
                    <Link href="" className="link_header" to="/Evento">Eventos</Link>
                    <Link href="" className="link_header" to="/TipoUsuario">Usuários</Link>
                    <Link href="" className="link_header" to="/TipoEvento">Contatos</Link>
                </nav>

                <nav className="nav_img">
                    <Link href="" className="link_header" to="/">Administrador</Link>
                    <img src={Icone} alt="Icone" />
                </nav>
            </div>
        </header>
    )
}

export default Header;