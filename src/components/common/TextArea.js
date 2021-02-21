import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ name, label, onChange, placeholder, readOnly, value, error,rows, cols }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  if (readOnly)
  return (
      <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <textarea
            rows={rows}
            cols={cols}
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly
          >
          </textarea>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
  );
  else
    return (
      <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <textarea
          rows={rows}
          cols={cols}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}            
        >
        </textarea>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
    );
};

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    rows: PropTypes.string.isRequired,
    cols: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired   
  };
  

export default TextArea;