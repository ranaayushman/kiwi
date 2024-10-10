import React from "react";
import { formFields, rightFormFields } from "../constants/index";
import { FormField } from "./ui/form";

const DualFormLayout = () => {
  return (
    <div className="flex justify-between gap-8 p-6 bg-white rounded-lg shadow">
      <div className="w-1/2">
        {formFields.map((section) => (
          <div key={section.section} className="mb-6">
            <h3 className="text-lg font-semibold mb-4">{section.section}</h3>
            <div className="space-y-4">
              {section.fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <FormField field={field} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Right Side */}
      {/* <div className="w-1/2">
        {rightFormFields.map((props) => (
          <div key={props.section} className="mb-6">
            <h3 className="text-lg font-semibold mb-4">{props.section}</h3>
            <div className="space-y-4">
              {props.fields.map((input) => (
                <div key={input.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1" />
                  {input.label}
                  <FormField input={input} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DualFormLayout;
