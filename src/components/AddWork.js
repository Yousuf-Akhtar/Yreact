import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddWorks({ addWork }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTitle("");
    setWork("")
  };
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [work, setWork] = useState("");
  function submit() {
    if (!title || !work) {
      alert("Please add some Title or Work");
    } else {
      addWork(title, work);
      handleClose();
    }
  }

  return (
    <>
      <div className="text-center m-3">
        <Button variant="primary" onClick={handleShow}>
          Add Work Here
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Youre Work Title Here"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            type="text"
            placeholder="Type Here What You Wanna do"
            value={work}
            onChange={(e) => {
              setWork(e.target.value);
            }}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submit}>
            Add Work
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddWorks;
