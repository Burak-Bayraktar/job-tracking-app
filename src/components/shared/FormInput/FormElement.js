import React from "react";
import PropTypes from "prop-types";
import './formElement.scss'

const FormElement = ({ formErrors, title, children, className }) => {

  return (
    <label className={`form-input ${Array.isArray(className) ? className.join('') : className}`}>
      <span className="-inline-text">{title}</span>
      {children}
      <div>{formErrors}</div>
    </label>
  );
};

FormElement.propTypes = {
  title: PropTypes.string,
  formErrors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};
export default FormElement;
