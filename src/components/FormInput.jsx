import React from "react";

const FormInput = ({
  label,
  type,
  placeholder,
  options,
  value,
  onChange,
  isRadio,
  isSelect,
}) => {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      {isRadio ? (
        <div className="flex items-center mt-1">
          {options.map((option, idx) => (
            <label key={idx} className="mr-4">
              <input
                type="radio"
                name={label.toLowerCase()}
                className="mr-2"
                value={option.value}
                onChange={onChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : isSelect ? (
        <select
          className="w-full p-2 border border-gray-300 rounded mt-1"
          value={value}
          onChange={onChange}
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormInput;
