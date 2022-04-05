import React from "react";
import PropTypes from "prop-types";

const Select = ({ options, className }) => {
  return (
    <select {...(className && { className })}>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default Select;
