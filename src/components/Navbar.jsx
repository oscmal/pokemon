import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
  const setActivo = ({isActive}) => (isActive ? 'active' : undefined)
  return (
    <header>
      <Navbar bg="link" variant="dark">
        <Navbar.Brand href="#home" className="ps-2"><img className='Imgpoke' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvI9U-ImGqO7fh6lVypwxZCbx0xSa-qLV_LA&usqp=CAU" alt="" /></Navbar.Brand>
        <Nav className="me-auto">

            <NavLink to="/" className={`text-blue text-decoration-none me-2` }>
              Inicio
            </NavLink>


            <NavLink to="/galeria" className={`text-blue text-decoration-none `}>
              Galería
            </NavLink>

        </Nav>
      </Navbar>
    </header>
  );
}
