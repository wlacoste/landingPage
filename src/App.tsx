import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ParallaxPage from "./components/Parallax";
import PrimerSeccion from "./pages/primerSeccion";
import SegundaSeccion from "./pages/segundaSeccion";
import TerceraSeccion from "./pages/terceraSeccion";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <ParallaxPage /> */}
        <PrimerSeccion />
        <SegundaSeccion />
        <TerceraSeccion />
        <div>Seccion4</div>
        <div>Footer</div>
      </BrowserRouter>
    </>
  );
}

export default App;
