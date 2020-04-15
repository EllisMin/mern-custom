import React from "react";

import "./styles.scss";

const Input = ({ handleChange, label, ...otherProps }) => {
  let inputLength = otherProps.value ? otherProps.value.length : null;

  return (
    <div className="input-group">
      <input
        className={`input-custom`}
        onChange={handleChange}
        {...otherProps}
      />
      {label && (
        <label className={`${inputLength ? "shrink" : ""} label-custom`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
