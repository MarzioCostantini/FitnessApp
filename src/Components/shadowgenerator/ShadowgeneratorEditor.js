import { useState } from "react";
import InnerShadowIcon from "../../assets/img/InnerShadow";
import ModalShadow from "../ModalShadow/ModalShadow";

import ShadowIcon from "../../assets/img/ShadowIcon";
import Trashbin from "../../assets/img/Binn_icon";
import "./ShadowgeneratorEditor.css";
const Shadowgenerator = () => {
  const [xaxis, setXaxis] = useState(0);
  const [yaxis, setYaxis] = useState(0);
  const [blur, setBlur] = useState(50);
  const [modus, setModus] = useState("");
  const [color, setColor] = useState("#c4c4c4");

  console.log({ modus });

  return (
    <main className="shadow">
      <section className="input-area">
        <label htmlFor="horizont">Horizontally</label>
        <div className="range">
          <input
            id="horizont"
            type="range"
            min={-150}
            max={150}
            value={xaxis}
            onChange={(event) => setXaxis(Number(event.target.value))}
          />
          <p className="output-range"> {xaxis}px</p>
        </div>

        <label htmlFor="vertic">Vertically</label>
        <div className="range">
          <input
            id="vertic"
            type="range"
            min={-150}
            max={150}
            value={yaxis}
            onChange={(event) => setYaxis(Number(event.target.value))}
          />
          <p className="output-range"> {yaxis}px</p>
        </div>

        <label htmlFor="blur">Blur</label>
        <div className="range">
          <input
            id="blur"
            type="range"
            min={0}
            max={250}
            value={blur}
            onChange={(event) => setBlur(Number(event.target.value))}
          />
          <p className="output-range"> {blur}px</p>
        </div>

        <label htmlFor="color">Color</label>
        <div className="range">
          <input
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <p className="output-range"> {color}</p>
        </div>
        <label htmlFor="direction">Modus</label>
        <div className="modus-wrapper">
          <div
            className={`radio ${modus == "" ? `active-modus` : ""}`}
            onClick={() => setModus("")}
          >
            <div className="radio-inne">
              <ShadowIcon />  <label htmlFor="outsite">Outsite</label>
            </div>
          </div>
          <div
            className={`radio ${modus == "inset" ? `active-modus` : ""}`}
            onClick={() => setModus("inset")}
          >
            <div className="radio-inne">
              <InnerShadowIcon /> <label htmlFor="insite">Insite</label>
            </div>
          </div>
        </div>
        <article>
          <ModalShadow
            xaxis={xaxis}
            yaxis={yaxis}
            blur={blur}
            color={color}
            modus={modus}
          />
          <button
            onClick={() => window.location.reload(false)}
            className="btn-border shake"
          >
            <Trashbin /> Reset
          </button>
        </article>
      </section>
      <section className="preview">
        <h4>Live Preview</h4>
        <article
          style={{
            boxShadow: `${modus} ${xaxis}px ${yaxis}px ${blur}px ${color}`,
          }}
        ></article>
      </section>
    </main>
  );
};

export default Shadowgenerator;
