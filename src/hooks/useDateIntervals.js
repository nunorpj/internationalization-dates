import { dates } from "../locales/index";
import { useTranslation } from "react-i18next";

const useDateIntervals = ({start, end, key}) => {
    const { i18n } = useTranslation();

    const options = dates[key];

    let fmt = new Intl.DateTimeFormat(i18n.language, options);

    const interval = fmt.formatRange(start, end)

    return { interval }

}

export default useDateIntervals;