import React, { useEffect, useState } from "react";
import "./Modal.css";
import codeIcon from "../../assets/img/code_icon.svg";
import copyIcon from "../../assets/img/copy_icon.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CloseIcon from "../../assets/img/Close_Icon";
import CodeIcon from "../../assets/img/Code_icon";

export default function Modal({
  selectedItems,
  columns,
  rows,
  gapColumn,
  gapRow,
}) {
  const [gridTemplate, setGridTemplate] = useState("");
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const gridChilds = selectedItems.map(
      (item) => `.child${item.id} { grid-area: ${item.gridAreaString}; }\n`
    );
    const gridTemplate = `.parent { 
          display: grid; 
          grid-template-columns: repeat(${columns}, 1fr); 
          grid-template-rows: repeat(${rows}, 1fr); 
          grid-column-gap: ${gapColumn}px; 
          grid-row-gap: ${gapRow}px; 
        }
        ${gridChilds.join(" ")}
        `;
    setGridTemplate(gridTemplate);
  }, [selectedItems, columns, rows, gapColumn, gapRow]);

  const toggleModal = () => {
    setModal(!modal);
    setCopied(false);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-full">
        <CodeIcon /> Get Code
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h4>Get the Code</h4>
            <p>
              Here is your CSS Grid Generator code, by the colors of the child
              elements, you can see which child element it is.
            </p>
            <article className="output">
              <div>
                <h3>
                  <span className="parent">.parent </span> &#123;
                </h3>
                <p>
                  <span className="operator">display:</span>
                  <span className="value">grid</span>;
                </p>
                <p>
                  <span className="operator">grid-template-columns:</span>
                  <span className="value">repeat({columns}, 1fr)</span>;
                </p>
                <p>
                  <span className="operator">grid-template-rows:</span>
                  <span className="value">repeat({rows}, 1fr)</span>;
                </p>
                <p>
                  <span className="operator">grid-column-gap:</span>
                  <span className="value">{gapColumn}px</span>;
                </p>
                <p>
                  <span className="operator">grid-row-gap:</span>
                  <span className="value">{gapRow}px</span>;
                </p>
                <p className="last-klammer">&#125;</p>
              </div>
              <div>
                {selectedItems.map((selectedItem) => (
                  <div className="output-childs" key={selectedItem.id}>
                    <h3 style={{ color: `${selectedItem.colorHex}` }}>
                      .child{selectedItem.id}
                      <span>
                        <span className="klammern">&#123;</span>{" "}
                        <span className="operator">grid-area:</span>
                        <span className="value">
                          {`${selectedItem.gridAreaString};`}
                        </span>
                        <span className="klammern">&#125;</span>
                      </span>
                    </h3>
                    <p></p>
                  </div>
                ))}
              </div>
            </article>
            <div className="btn-copy-area">
              {copied ? <p>Copied!</p> : null}
              <CopyToClipboard
                text={gridTemplate}
                onCopy={() => setCopied(true)}
              >
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
    </>
  );
}
