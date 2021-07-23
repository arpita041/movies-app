import React from 'react'
import './inputt.css'
function InputField({ value, label, name, placeholder, type, onChange }) {
    return (
        <div className="form-group" >
        {label && <label htmlFor="input-field">{label}</label>}
        <input
          type={type}
          value={value}
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          id='inn'
          required
        />
      </div>
    )
}

export default InputField
