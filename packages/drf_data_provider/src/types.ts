export interface DRFQueryInterface {
  ordering?: string;
  search?: string;
  page?: number;
  page_size?: number;
  [key: string]: any;
}

export interface DRFPaginationResponse {
  results: any[];
  count: number;
  totalPages: number;
  currentPage: number;
}

export interface Variable{
  [key: string]: any;
}