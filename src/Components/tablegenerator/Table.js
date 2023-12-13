import React, { useState } from "react";
import { SelectableGroup, DeselectAll } from "react-selectable-fast";
import Box from "./Box";
import "./Tablet.css";
import { useEffect } from "react";

import Trashbin from "../../assets/img/Binn_icon";
import Modal from "../ModalGrid/Modal";

function gridAreaString(selectedCellIndezies, tableColumns) {
  const cells = selectedCellIndezies
    .sort((index1, index2) => index1 - index2)
    .map((cellIdx) => ({
      cellIdx,
      row: Math.ceil((cellIdx + 1) / tableColumns),
      column: cellIdx - Math.floor(cellIdx / tableColumns) * tableColumns + 1,
    }));

  const first = cells[0];
  const last = cells[cells.length - 1];

  const gridAreaStart = `${first.row} / ${first.column}`;
  const gridAreaEnd = `${last.row + 1} / ${last.column + 1}`;
  return `${gridAreaStart} / ${gridAreaEnd}`;
}

export default function Table() {
  const [columns, setColumn] = useState(5);
  const [rows, setRow] = useState(5);
  const [kacheln, setKacheln] = useState(columns * rows);
  const [id, setId] = useState(1);

  const [gapColumn, setGapColumn] = useState(0);
  const [gapRow, setGapRow] = useState(0);

  const [selectedItems, setSelectedItems] = useState([]);

  const resetGrid = () => {
    setSelectedItems([]);
  };

  const onChangeColumns = (e) => {
    const newNumber = Number(e.target.value);
    if (newNumber > 12 || newNumber < 0) {
      return;
    }
    setColumn(newNumber);
    resetGrid();
  };
  const onChangeRows = (e) => {
    const newNumber = Number(e.target.value);
    if (newNumber > 12 || newNumber < 0) {
      return;
    }
    setRow(newNumber);
    resetGrid();
  };

  function generateRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  useEffect(() => {
    setKacheln(columns * rows);
  }, [rows, columns]);

  const handleSelectionFinish = (items) => {
    const color = generateRandomColor();

    const startIdx = selectedItems
      .map(({ selectedItem }) => selectedItem.length)
      .reduce((sum, length) => sum + length, 0);

    let selectedIndexArray = items
      .slice(startIdx)
      .map((item) => item.props.index);

    if (!selectedIndexArray || selectedIndexArray.length === 0) {
      return;
    }

    const newObjectofSelectedItems = {
      id: id,
      selectedItem: selectedIndexArray,
      gridAreaString: gridAreaString(selectedIndexArray, columns),
      colorHex: color,
    };
    setSelectedItems([...selectedItems, newObjectofSelectedItems]);
    setId(id + 1);
  };

  const renderGrid = () => (
    <SelectableGroup
      className="main"
      // enableDeselect
      DeselectAll
      tolerance={0}
      globalMouse={false}
      allowClickWithoutSelected={false}
      // duringSelection={handleSelecting}
      onSelectionFinish={handleSelectionFinish}
      // onSelectedItemUnmount={handleSelectedItemUnmount}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        columnGap: `${gapColumn}px`,
        rowGap: `${gapRow}px`,
      }}
    >
      {Array.from(Array(kacheln)).map((_, index) => {
        const selected = selectedItems.find(({ selectedItem }) =>
          selectedItem.includes(index)
        );
        const color = selected ? selected.colorHex : undefined;
        return <Box key={index} index={index} color={color} />;
      })}
    </SelectableGroup>
  );

  return (
    <main className=" grid-generator">
      <section className="input-area">
        <label htmlFor="column">Colums</label>
        <input
          max={12}
          min={1}
          id="column"
          type="number"
          value={columns.toString()}
          onChange={onChangeColumns}
        />
        <label htmlFor="rows">Rows</label>
        <input
          max={12}
          min={1}
          type="number"
          value={rows.toString()}
          onChange={onChangeRows}
        />
        <label htmlFor="gapColumn">Column GAP in PX</label>
        <input
          value={gapColumn}
          type="number"
          onChange={(e) => setGapColumn(Number(e.target.value))}
        />
        <label htmlFor="gapRow">Row GAP in PX</label>
        <input
          value={gapRow}
          id="gapRow"
          type="number"
          onChange={(e) => setGapRow(Number(e.target.value))}
        />
        <div>
          <Modal
            selectedItems={selectedItems}
            rows={rows}
            columns={columns}
            gapColumn={gapColumn}
            gapRow={gapRow}
          />

          <button
            onClick={() => window.location.reload(false)}
            className="btn-border shake"
          >
            <Trashbin /> Reset Grid
          </button>
        </div>
      </section>

      <section className="grid-area">{renderGrid()}</section>
    </main>
  );
}
