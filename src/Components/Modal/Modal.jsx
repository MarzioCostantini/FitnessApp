import "./Modal.css";

const Modal = ({ setOpen, modalData }) => {
  console.log("modaldata auf Modal", modalData);
  return (
    <section className="modal-wrapper" onClick={() => setOpen(false)}>
      <article>
        <h2>{modalData?.name}</h2>
      </article>
      |
    </section>
  );
};

export default Modal;
