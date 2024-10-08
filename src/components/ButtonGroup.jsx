import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="flex justify-end mt-6">
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">
        Submit
      </button>
      <button className="ml-4 bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300">
        Preview
      </button>
    </div>
  );
};

export default ButtonGroup;
