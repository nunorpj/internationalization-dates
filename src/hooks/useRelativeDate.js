import { dates } from "../locales/index";
import { useTranslation } from "react-i18next";


const useRelativeDate = (date, key) => {
    const { i18n } = useTranslation();

    const rtf1 = new Intl.RelativeTimeFormat(i18n.language);

  return { relativeDate: rtf1.format(-2, 'seconds') };
};

export default useRelativeDate;



// const MINUTE = 60,
//   HOUR = MINUTE * 60,
//   DAY = HOUR * 24,
//   YEAR = DAY * 365;

// function getTimeAgo(date) {
//   const secondsAgo = Math.round((+new Date() - date) / 1000);

//   if (secondsAgo < MINUTE) {
//     return secondsAgo + "s";
//   } else if (secondsAgo < HOUR) {
//     return Math.floor(secondsAgo / MINUTE) + "m";
//   } else if (secondsAgo < DAY) {
//     return Math.floor(secondsAgo / HOUR) + "h";
//   } else if (secondsAgo < YEAR) {
//     return date.toLocaleString("default", { day: "numeric", month: "short" });
//   } else {
//     return date.toLocaleString("default", { year: "numeric", month: "short" });
//   }
// } 

