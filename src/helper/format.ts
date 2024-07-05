import dayjs from "dayjs";

import "dayjs/locale/ko";

dayjs.locale("ko");

const formatPrice = (value: string) => value.replaceAll(",", "");

const removeDashes = (value: string) => value.replaceAll("-", "");

const formatDate = (date: string, format = "YY.MM.DD HH:mm") =>
  dayjs(date).format(format);

const getTestDriveDate = (startDate: string, endDate: string) =>
  `${dayjs(startDate).format("YYYY년 MM월 DD일 (ddd) HH:mm")}~${dayjs(endDate).format("HH:mm")}`;

export { formatPrice, removeDashes, formatDate, getTestDriveDate };
