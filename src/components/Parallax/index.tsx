import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PrimerSeccion from "../../pages/primerSeccion";
import SegundaSeccion from "../../pages/segundaSeccion";
import TerceraSeccion from "../../pages/terceraSeccion";

import styles from "./index.module.scss";
import { ReactNode } from "react";

interface IParallax {
  nodo: ReactNode;
  page: number;
  offset: number;
}

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
      <Parallax
        pages={3}
        style={{ top: "0", left: "0" }}
        className={styles.contenedorParallax}
      >
        <ParallaxLayer offset={0} speed={1} className={styles.ParallaxLayer}>
          <PrimerSeccion />
          <SegundaSeccion />
          <TerceraSeccion />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={1} className={styles.ParallaxLayer}>
          <PrimerSeccion />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default ParallaxPage;
