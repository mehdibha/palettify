import { format, parseISO } from "date-fns";

export const formatDate = (date: string | Date) => {
  let parsedDate: Date;
  if (typeof date === "string") {
    parsedDate = parseISO(date);
  } else {
    parsedDate = date;
  }
  return format(parsedDate, "MMM dd, yyyy");
};
