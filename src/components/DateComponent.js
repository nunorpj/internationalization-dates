import React from "react";
import { useTranslation } from "react-i18next";
import useDate from "../hooks/useDate";
import useDateIntervals from '../hooks/useDateIntervals';
import useRelativeDate from '../hooks/useRelativeDate';

const defaultDate = new Date();
const date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
const date2 = new Date(Date.UTC(2007, 0, 11, 11, 0, 0));

const DateComponent = () => {
  const [t] = useTranslation();
  const { date } = useDate(defaultDate, "default");
  const { interval } = useDateIntervals({ start: date1, end: date2, key:"defaultRange"})
  const {relativeDate} = useRelativeDate(defaultDate)

  return (
    <div>
      <h3>{t("resources:datesLabel")}</h3>
      <p> <strong>Raw:</strong> {defaultDate.toString()}</p>
      <p> <strong>i18n:</strong>{t("resources:dates.standard", { date: defaultDate })}</p>
      <p> <strong>hook:</strong>{date}</p>
      <p> <strong>hook intrval:</strong>{interval}</p>
      <p> <strong>relative date:</strong>{relativeDate}</p>
    </div>
  );
};

export default DateComponent;
