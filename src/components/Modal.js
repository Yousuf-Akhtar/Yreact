import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";



function Work({ data, onDelete }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            <p>{data.title}</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{data.work}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={() => onDelete(data.sno)}>
            Completed
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Work;

// return <h1  className="text-center m-3 text-white" >No Work Here</h1>