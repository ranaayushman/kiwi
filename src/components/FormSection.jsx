import React from 'react';

const FormSection = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
};

export default FormSection;
