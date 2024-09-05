import React from 'react';
import FormSection from './FormSection';
import Button from './Button';

interface ContentSectionProps {
  primaryTitle: string;
  primaryDescription: string;
  primaryButtonText: string;
  secondaryTitle: string;
  formFields: Array<{ type: string; placeholder: string; icon: string }>;
  formButtonText: string;
  passwordLinkText?: string;
  onButtonClick?: () => void; // Função para lidar com clique de botão
}

const ContentSection: React.FC<ContentSectionProps> = ({
  primaryTitle,
  primaryDescription,
  primaryButtonText,
  secondaryTitle,
  formFields,
  formButtonText,
  passwordLinkText,
  onButtonClick
}) => {
  return (
    <div className="content-inner">
      <div className="first-column">
        <h2 className="title title-primary">{primaryTitle}</h2>
        <p className="description description-primary">{primaryDescription}</p>
        <Button id={primaryButtonText.toLowerCase()} className="btn btn-primary" onClick={onButtonClick}>
          {primaryButtonText}
        </Button>
      </div>
      <div className="second-column">
        <h2 className="title title-second">{secondaryTitle}</h2>
        <FormSection
          formFields={formFields}
          formButtonText={formButtonText}
          passwordLinkText={passwordLinkText}
        />
      </div>
    </div>
  );
};

export default ContentSection;
