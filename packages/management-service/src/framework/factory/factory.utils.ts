export const buildMany = <T>(factory: () => T, count: number): T[] => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(factory());
  }
  return result;
};
