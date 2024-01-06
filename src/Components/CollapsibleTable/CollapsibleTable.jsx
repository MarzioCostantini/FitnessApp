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
    console.log("das is der index", index);
    // const updatedWorkoutPlan = workoutPlan.filter(
    //   (exercise) => exercise.id !== id
    // );
    // setWorkoutPlan(updatedWorkoutPlan);

    const updatedWorkoutPlan = [...workoutPlan];
    updatedWorkoutPlan.splice(index, 1);
    setWorkoutPlan(updatedWorkoutPlan);
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="td" scope="row">
          {index + 1}
        </TableCell>
        <TableCell className="name">{row.name}</TableCell>
        <TableCell> 3 x 15</TableCell>
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
              <Typography variant="p" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <h1>HALLO</h1>
                  </TableRow>
                </TableHead>
                <TableBody>CONTENT</TableBody>
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
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>#</TableCell>
            <TableCell>Exercise</TableCell>
            <TableCell>Repetitions</TableCell>
            <TableCell>Muscle</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workoutPlan.map((row, index) => (
            <Row index={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
