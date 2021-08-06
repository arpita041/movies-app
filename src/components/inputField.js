import React from "react";
import "../css/inputt.css";
function InputField({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  myFunc,
}) {
  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={myFunc}
        id="inn"
        required
      />
    </div>
  );
}

export default InputField;
