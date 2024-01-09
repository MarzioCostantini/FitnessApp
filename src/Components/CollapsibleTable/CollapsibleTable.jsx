import "./CollapsibleTable.css";

import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { Button } from "@mui/material";
import { WorkoutPlansContext } from "../../Context/Context";

function Row(props) {
  const { row, index } = props;
  const [open, setOpen] = useState(false);
  const { workoutPlan, setWorkoutPlan } = useContext(WorkoutPlansContext);

  const removeExercise = (index) => {
    const updatedWorkoutPlan = [...workoutPlan];
    updatedWorkoutPlan.splice(index, 1);
    setWorkoutPlan(updatedWorkoutPlan);
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell className="icon-btn">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className="num-ex" component="td" scope="row">
          {index + 1}
        </TableCell>
        <TableCell className="name">{row.name}</TableCell>
        <TableCell>
          {row.sets} x {row.repetitions}
        </TableCell>
        <TableCell>{row.weight}</TableCell>
        <TableCell className="muscle">
          <p>{row.target}</p>
        </TableCell>
        <TableCell align="right">
          <Button onClick={() => removeExercise(index)} variant="outlined">
            Remove
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <article className="acc-visib">
                  <div>
                    <h6>Instructions:</h6>
                    <ul>
                      {row.instructions?.map((item, index) => (
                        <li key={index}>
                          <p className="num">{index + 1}</p>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <img src={`${row.gifUrl}.gif`} alt="Fitness gif" />
                </article>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ workoutPlan }) {
  return (
    <section>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>#</TableCell>
              <TableCell>Exercise</TableCell>
              <TableCell>Repetitions</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Muscle</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {workoutPlan?.map((row, index) => (
              <Row key={index} index={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
