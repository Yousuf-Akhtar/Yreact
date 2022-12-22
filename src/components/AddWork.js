import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='text-center m-3'>
      <Button  variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><input class="form-control form-control-lg" type="text" placeholder="Youre Work Title Here"></input></Modal.Title>
        </Modal.Header>
        <Modal.Body><input class="form-control" type="text" placeholder="Type Here What You Wanna do"></input></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example ;