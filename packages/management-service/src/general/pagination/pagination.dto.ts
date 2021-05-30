import { Model } from '../database/database.dto';

export type Pagination<T extends Model> = {
  items: T[];
  pageNumber: number;
  pageSize: number;
  lastPageNumber: number;
};

export type PaginationQuery = {
  pageNumber: number;
  pageSize: number;
};
