import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup className="ms-3">
      <Button
        className='language-button'
        onClick={() => changeLanguage('en')}
        role="button" 
      >
        EN
      </Button>
      <Button
        className='language-button' 
        onClick={() => changeLanguage('fr')}
        role="button" 
      >
        FR
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
