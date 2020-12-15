import React from "react";
import { useTranslation } from "react-i18next";
import resources from '../locales/index'

const ChangeLanguageBtn = () => {
    const {i18n} = useTranslation('resources');

    const handleClick = () => {
        const language = Object.keys(resources).find((lgn) => lgn !== i18n.language)

        i18n.changeLanguage(language);
    }
  return <button onClick={handleClick}> {i18n.language} </button>;
};

export default ChangeLanguageBtn;
