import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export function AlertInputModal(props) {
  
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Body>Please Fill all the Inputs to Submit!</Modal.Body>
        <Modal.Footer>
          <Button 
          variant="primary" 
          onClick={() => props.handleClose()}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}