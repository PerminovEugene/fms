import { countLastPageNumber } from './pagination.utils';

describe.only('Pagination utils', () => {
  describe('Count last page', () => {
    it('Should return 0 page as last when count is 0', () => {
      expect(countLastPageNumber(0, 10)).toEqual(0);
    });
    it('Should return 0 when count is less than page size', () => {
      expect(countLastPageNumber(3, 10)).toEqual(0);
      expect(countLastPageNumber(1, 2)).toEqual(0);
      expect(countLastPageNumber(1000, 100000)).toEqual(0);
    });
    it('Should return 0 when count equals page size', () => {
      expect(countLastPageNumber(3, 3)).toEqual(0);
      expect(countLastPageNumber(1, 1)).toEqual(0);
      expect(countLastPageNumber(1000, 1000)).toEqual(0);
    });
    it('Should return correct last page when count more then page size', () => {
      expect(countLastPageNumber(4, 3)).toEqual(1);
      expect(countLastPageNumber(13, 1)).toEqual(12);
      expect(countLastPageNumber(1000, 100)).toEqual(9);
    });
  });
});
