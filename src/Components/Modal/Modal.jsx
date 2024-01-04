import { Class } from "@mui/icons-material";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";

// Context
import { FetchContext } from "../../Context/Context";
import { useContext } from "react";

const Modal = ({ setOpen, modalData, setSavedStorage }) => {
  const { exercise, setExercise } = useContext(FetchContext);

  // ! Favoriten funktion
  const setFav = (id) => {
    const favÜbung = exercise.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );
    console.log("klick", favÜbung);
    // Aktualisieren des States und des lokalen Speichers und des Context
    setSavedStorage(favÜbung);
    setExercise(favÜbung);
    setOpen(false);
    localStorage.setItem("exercises", JSON.stringify(favÜbung));
  };

  return (
    <section className="modal-wrapper">
      <article>
        <div>
          <h4>{modalData?.name}</h4>
          <p className="target">{modalData?.target}</p>

          <div className="instruction">
            <h6>Instructions:</h6>
            <ol>
              {modalData.instructions?.map((item, index) => (
                <li key={index}>
                  <p className="num">{index + 1}</p> <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
          <div onClick={() => setOpen(false)} className="close-btn">
            <CloseIcon />
          </div>

          <div className="fav-icon">
            {modalData?.favorite ? (
              <IconButton
                className="star-icon full"
                onClick={() => setFav(modalData?.id)}
                aria-label="delete"
              >
                <StarIcon />
              </IconButton>
            ) : (
              <IconButton
                className="star-icon"
                onClick={() => setFav(modalData?.id)}
              >
                <StarBorderIcon />
              </IconButton>
            )}
          </div>
        </div>
        <div className="exer-img">
          <img src={`${modalData?.gifUrl}.gif`} alt="Exercise Image" />
        </div>
      </article>
    </section>
  );
};

export default Modal;
