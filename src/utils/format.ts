import dayjs from "dayjs";

const formatDate = (date: string): string => {
  if (!dayjs(date).isValid()) {
    return "";
  }

  return dayjs(date).format("DD MMM, HH:mm");
};

export { formatDate };
