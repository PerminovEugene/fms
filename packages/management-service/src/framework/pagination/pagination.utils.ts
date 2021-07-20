import { Model } from '../database/database.dto';

export type Pagination<T extends Model> = {
  items: T[];
  pageNumber: number;
  pageSize: number;
  lastPageNumber: number;
  order: Order;
};

export type PaginationQuery = {
  pageNumber: number;
  pageSize: number;
  order: Order;
};

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

export const getPaginationCondition = (paginationQuery: PaginationQuery) => ({
  take: paginationQuery.pageSize,
  skip: paginationQuery.pageNumber * paginationQuery.pageSize,
  orderBy: { id: paginationQuery.order },
});

// Pagination starts from 0
export const countLastPageNumber = (count: number, pageSize: number) => {
  return Math.abs(Math.trunc((count - 1) / pageSize));
};
