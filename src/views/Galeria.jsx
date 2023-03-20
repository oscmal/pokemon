import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Galeria() {
  const navigate = useNavigate();
  const [listPokemon, setListPokemon] = useState([]);
  const [pokemonSelec, setPokemonSelec] = useState("")

  const getPokemon = async () => {
    const peticion = await fetch("https://pokeapi.co/api/v2/pokemon?limit=26&offset=0");
    const respuesta = await peticion.json();
    console.log(respuesta.results)
    
    setListPokemon(respuesta.results);
  };

  const buscar = ( ) => {
    if (pokemonSelec === "") {
      return alert("Selecciona un Pokémon");
    }
    navigate(`/resultado/${pokemonSelec}`)
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h2>Galería</h2>
      <Row>
        <Col xs={9} lg={3}>
          <Form.Select aria-label="Seleccione" onChange={({target}) => setPokemonSelec (target.value)} >
            <option value="">Seleccione tu Pokémon</option>
            {listPokemon.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={3} lg={2}>
          <Button variant="primary" onClick={buscar} >
            Buscar
          </Button>
        </Col>
      </Row>
    </div>
  );
}
