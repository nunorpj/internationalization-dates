import React from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const [t] = useTranslation();

  return <h2>{t("resources:welcome")}</h2>;
};

export default Title;
