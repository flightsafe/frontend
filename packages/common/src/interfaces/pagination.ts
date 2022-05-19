export interface Pagination<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
  currentPage: number;
  totalPage: number;
}
