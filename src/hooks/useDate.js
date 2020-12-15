import { dates } from "../locales/index";
import { useTranslation } from "react-i18next";

const useDate = (date, key) => {
  const { i18n } = useTranslation();

  const options = dates[key];

  if (!options) return date.toLocaleString();

  const dts = new Intl.DateTimeFormat(i18n.language,options) // we can use toLocaleString(i18n.language, options)

  return { date: dts.format(date) };
};

export default useDate;
