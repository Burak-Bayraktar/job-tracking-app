import React from "react";
import PropTypes from "prop-types";

const Select = ({ className, children, onChange, name }) => {
  return (
    <select
      {...(onChange && { onChange })}
      {...(className && { className })}
      {...(name && { name })}
    >
      {children}
    </select>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Select;
