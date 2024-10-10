import React, { useState } from "react";
import { Image } from "lucide-react";

export const FormField = ({ field }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDateInput, setShowDateInput] = useState(false);
  const [dateValue, setDateValue] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleDateFocus = () => {
    setShowDateInput(true);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
    setShowDateInput(true);
  };

  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          placeholder={field.placeholder}
          className="w-full p-2 border rounded"
        />
      );
    case "select":
      return (
        <div className="relative">
          <select className="w-full p-2 border rounded appearance-none">
            <option>{field.placeholder}</option>
            {field.options &&
              field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      );
    case "date":
      return (
        <div className="relative">
          <input
            type={showDateInput ? "date" : "text"}
            placeholder={field.placeholder}
            onFocus={handleDateFocus}
            onChange={handleDateChange}
            value={dateValue}
            className="w-full p-2 border rounded"
          />
        </div>
      );
    case "radio":
      return (
        <div className="flex space-x-4">
          {field.options.map((option) => (
            <label key={option} className="flex items-center">
              <input type="radio" name={field.name} className="mr-2" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      );
    case "file":
      return (
        <div className="border-2 border-dashed border-gray-300 p-4 rounded">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image className="mr-2 text-gray-400" size={50} />
              <span className="text-sm text-gray-500">
                {selectedFile ? selectedFile.name : field.placeholder}
              </span>
            </div>
            <label
              htmlFor={`file-upload-${field.name}`}
              className="cursor-pointer"
            >
              <div className="px-4 ml-2 py-2 bg-[#789336] text-white rounded flex justify-center items-center">
                Browse
              </div>
            </label>
          </div>
          <input
            id={`file-upload-${field.name}`}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      );
    default:
      return null;
  }
};
