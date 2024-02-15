import { Button, Modal } from "react-bootstrap";
import React from 'react';

const EditModel = ({editOnClick,editOnHide,editShows,editTitle,editBody,editButton1,editButton2,editOnclick1}) => {
  return (
    <div>
      <Modal
        show={editShows}
        onHide={editOnHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{editTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {editBody}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={editOnClick}  >
            {editButton1}
          </Button>
          <Button variant="primary" onClick={editOnclick1}>{editButton2}</Button>
        </Modal.Footer>
      </Modal>
        </div>
  )
}

export default EditModel;
