import { formatDistance } from "date-fns";

export function dateFromNow(referenceDate: string | Date) {
  const formattedDate =
    typeof referenceDate === "string" ? new Date(referenceDate) : referenceDate;
  const currentDate = new Date();

  return formatDistance(currentDate, formattedDate);
}
