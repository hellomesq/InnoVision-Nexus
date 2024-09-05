import React from 'react';
import Button from './Button';

interface FormField {
  type: string;
  placeholder: string;
  icon: string;
}

interface FormSectionProps {
  formFields: FormField[];
  formButtonText: string;
  passwordLinkText?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ formFields, formButtonText, passwordLinkText }) => {
  return (
    <form className="form">
      {formFields.map((field, index) => (
        <label className="label-input" key={index}>
          <input type={field.type} placeholder={field.placeholder} />
        </label>
      ))}
      {passwordLinkText && <a className="password" href="#">{passwordLinkText}</a>}
      <Button className="btn btn-second">{formButtonText}</Button>
    </form>
  );
};

export default FormSection;
