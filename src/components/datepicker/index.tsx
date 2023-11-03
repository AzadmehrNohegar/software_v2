import {
  DatePickerProps,
  CalendarProps,
  default as MultiDatePicker,
} from "react-multi-date-picker";
import clsx from "clsx";
import { useRef } from "react";
import "react-multi-date-picker/styles/colors/teal.css";

type CalendarPropsGeneral = DatePickerProps & CalendarProps;
interface IDatePicker extends CalendarPropsGeneral {
  containerClassName?: string;
}

function DatePicker(props: IDatePicker) {
  const ref = useRef<HTMLDivElement>(null);
  const { containerClassName, ...rest } = props;

  return (
    <div
      className={clsx(
        "border border-grey-200 w-full focus:border-info-200 rounded-lg relative",
        containerClassName
      )}
    >
      <MultiDatePicker
        ref={ref}
        monthYearSeparator="|"
        calendarPosition="bottom-right"
        editable={false}
        containerClassName="w-full"
        className="border border-grey-200 green"
        arrowClassName="border-r-0 border-l-0"
        inputClass="w-full px-3 py-[11px] outline-none border-none relative z-10 rounded-lg"
        {...rest}
      />
    </div>
  );
}

export { DatePicker };
