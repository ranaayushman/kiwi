import { formFields, rightFormFields } from "../constants/index";
import Button from "./ui/Button";
import { FormField } from "./ui/form";

const DualForm = () => {
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
      <div className="w-1/2">
        {rightFormFields.map((section) => (
          <div key={section.heading} className="mb-6">
            <h3 className="text-lg font-semibold mb-4">{section.heading}</h3>
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
        <Button />
      </div>
    </div>
  );
};

export default DualForm;
