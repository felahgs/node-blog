import { formatDistance, format } from "date-fns";

export function dateFromNow(referenceDate: string | Date) {
  const formattedDate =
    typeof referenceDate === "string" ? new Date(referenceDate) : referenceDate;
  const currentDate = new Date();

  return formatDistance(currentDate, formattedDate);
}

export function formatDate(date: string | Date) {
  const formattedDate = typeof date === "string" ? new Date(date) : date;

  return format(formattedDate, "MMM d, yyyy");
}
