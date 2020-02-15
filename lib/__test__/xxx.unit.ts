const sum = (a:number,b:number)=>{
  return a+b
}


test('jest官方测试用例 sum(1,1)===2', () => {
  expect(sum(1, 1)).toBe(2);
});
