import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const Resultado = () => {
    const { pokemon } = useParams();
    const navigate = useNavigate();
    const [imagenes, setImagenes] = useState([]);

    const regresar = () => {
        navigate("/galeria");
        };

    const getImagen = async () => {
        const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        const respuesta = await peticion.json();
        // console.log(respuesta.sprites.other.dream_world.front_default)
        setImagenes (respuesta.sprites.other.dream_world.front_default);
    }

        useEffect(() => { 
            getImagen();
        }, []);

    return ( 
        <div>
            <h2 className="text-center">Resultado de la búsqueda </h2>
            <Row>
            <div className="container d-flex justify-content-center my-3 ">
            <img src= {imagenes} />
            </div>
                <div className="d-grid gap-2 col-6 mx-auto my-4">
                    <Button variant="primary" onClick={regresar} >
                    Regresar
                    </Button>
                </div>
            </Row>
            <br/>
            
        </div>
    );
};
export default Resultado;