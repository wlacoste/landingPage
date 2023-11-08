import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PrimerSeccion from "../../pages/primerSeccion";
import SegundaSeccion from "../../pages/segundaSeccion";
import TerceraSeccion from "../../pages/terceraSeccion";

import styles from "./index.module.scss";
function ParallaxPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "aquamarine",
        textAlign: "center",
      }}
    >
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={1}>
          <p className={styles.texto}>Parallax1</p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <p className={styles.textos}>Parallax2</p>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={10}>
          <p className={styles.texto}>Parallax3</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxPage;
