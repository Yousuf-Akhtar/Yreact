import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function Work({data }) {
   const onDelete = () => {
    console.log (data.sno)
   } ;
  //  function onDelete(sno){
  //   setData([...data].filter(data => data.sno !== sno));
  // };

  

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
         
          <Modal.Title><p>{data.title}</p></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{data.work}</p>
        </Modal.Body>

        <Modal.Footer>
          
          <Button variant="danger" onClick={onDelete}>Completed</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Work;