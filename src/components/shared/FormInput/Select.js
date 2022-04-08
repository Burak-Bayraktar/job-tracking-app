import React from "react";
import PropTypes from "prop-types";

const Select = ({ className, children, onChange, name, defaultValue, value }) => {
  return (
    <select
      {...(onChange && { onChange })}
      {...(className && { className })}
      {...(name && { name })}
      {...(defaultValue && { defaultValue })}
      {...(value && { value })}
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
  defaultValue: PropTypes.string,
  value: PropTypes.any,
};

export default Select;
