type RowList<T> = {
  rowList: T[];
  count: number;
};

type Row<T> = {
  row: T;
};

type ApiResponse<T> = {
  data: T;
};

type ApiErrorResponse = {
  error: string;
  message: string;
  status: number;
};

export type { RowList, Row, ApiResponse, ApiErrorResponse };
