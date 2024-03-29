import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export default function InputGroup({
  name,
  placeholder,
  value,
  error,
  onChange,
  icon,
  type
}) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={event => onChange(event)}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string
};

InputGroup.defaultProps = {
  type: "text"
};
