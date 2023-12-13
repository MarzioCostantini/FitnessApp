import "./ModalShadow.css";
import { useEffect, useState } from "react";
import CodeIcon from "../../assets/img/Code_icon";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CloseIcon from "../../assets/img/Close_Icon";
import copyIcon from "../../assets/img/copy_icon.svg";

const ModalShadow = ({ xaxis, yaxis, blur, color, modus }) => {
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shadowcode, setShadowCode] = useState("");

  console.log({ shadowcode });
  const toggleModal = () => {
    setModal(!modal);
    setCopied(false);
  };
  useEffect(() => {
    setShadowCode(
      `box-shadow: ${modus} ${xaxis}px ${yaxis}px ${blur}px ${color};`
    );
  }, [xaxis, yaxis, blur, color, modus]);

  return (
    <section>
      <button onClick={toggleModal} className="btn-full">
        <CodeIcon /> Get Code
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h4>Get the Code</h4>
            <p>
              Here is your CSS Shadow Generator code, enjoy your code generate
              by PowerRator.
            </p>
            <article className="output">
              <p>
                <span className="operator">box-shadow:</span>
                <span className="value">
                  {modus} {xaxis}px {yaxis}px {blur}px {color};
                </span>
              </p>
            </article>
            <div className="btn-copy-area">
              {copied ? <p>Copied!</p> : null}
              <CopyToClipboard text={shadowcode} onCopy={() => setCopied(true)}>
                <button className="btn-full">
                  <img src={copyIcon} alt="copy icon" />
                  Copy Code
                </button>
              </CopyToClipboard>
            </div>

            <div onClick={toggleModal} className="close-modal">
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ModalShadow;
