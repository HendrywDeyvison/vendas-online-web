interface Meta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export interface ResponseDataType {
  data: [];
  meta: Meta;
}
