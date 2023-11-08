import "./App.css";
import NavBar from "./components/NavBar";
import PrimerSeccion from "./pages/primerSeccion";
import SegundaSeccion from "./pages/segundaSeccion";
import TerceraSeccion from "./pages/terceraSeccion";

function App() {
  return (
    <>
      <NavBar />
      <PrimerSeccion />
      <SegundaSeccion />
      <TerceraSeccion />
      <div>Seccion4</div>
      <div>Footer</div>
    </>
  );
}

export default App;
