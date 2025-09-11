import logo from '../Imagenes/logo.jpg';
import './Footer.css';
const Footer_Abajo =() => {
  return (
    <>
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="Logotipo" className="footer-logo" />
                <p>© 2025 Comuctiva. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <a href="#!" className="footer-link">Política de Privacidad</a>
                    <span>|</span>
                    <a href="#!" className="footer-link">Términos de Servicio</a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer_Abajo;