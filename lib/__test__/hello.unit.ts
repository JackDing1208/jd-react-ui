const sum = (...numbers: number[]) => {
  return numbers.reduce((sum, value) => sum + value, 0);
};


test("单元测试模板 sum(1,1)===2", () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});
