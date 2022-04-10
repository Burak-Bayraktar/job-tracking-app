import React from "react";
import { Modal } from "..";
import PropTypes from "prop-types";
import Button from "../../FormInput/Button";
import './style.scss'

const DeleteModal = ({show, setShow, deleteItem, selectedItem }) => {
  return (
    <Modal show={show}>
      <Modal.Header>WARNING!</Modal.Header>
      <Modal.Body>
          <div className="content">
            Are you sure you want to delete it?
          </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons">
          <Button content="Cancel" onClick={() => setShow(false)} className="cancel-button" />
          <Button 
            content="Delete" 
            onClick={() => {
              deleteItem(selectedItem)
              setShow(false)
            }} 
            className="save-button" 
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

DeleteModal.propTypes = {
  show: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setShow: PropTypes.func,
  deleteItem: PropTypes.func,
  selectedItem: PropTypes.object,
};

export default DeleteModal;
