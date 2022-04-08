import React, { Children } from "react";
import PropTypes from "prop-types";
import './style.scss'

export const Modal = ({ show, children }) => {
  let _modalHeader, _modalBody, _modalFooter;

  Children.forEach(children, (child) => {
    if (child.type === ModalHeader) {
      return (_modalHeader = child);
    }

    if (child.type === ModalBody) {
      return (_modalBody = child);
    }

    if (child.type === ModalFooter) {
      return (_modalFooter = child);
    }
  });

  if (!_modalHeader)
    _modalHeader = <div className="modal-header">{children}</div>;
  if (!_modalBody) _modalBody = <div className="modal-body">{children}</div>;
  if (!_modalFooter)
    _modalFooter = <div className="modal-footer">{children}</div>;

  return (
    <div className={`modal-wrapper ${show ? "show" : "hidden"}`}>
      <div className="modal-container">
        {_modalHeader}
        {_modalBody}
        {_modalFooter}
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => (
  <div className="modal-header">{children}</div>
);
const ModalBody = ({ children }) => (
  <div className="modal-body">{children}</div>
);
const ModalFooter = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

ModalHeader.propTypes = {
  children: PropTypes.node,
};

ModalBody.propTypes = {
  children: PropTypes.node,
};

ModalFooter.propTypes = {
  children: PropTypes.node,
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
