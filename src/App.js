import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Galeria from "./views/Galeria";
import Resultado from "./views/Resultado";// 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <section>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/resultado/:pokemon" element={<Resultado />} />
            </Routes>
          </Container>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
