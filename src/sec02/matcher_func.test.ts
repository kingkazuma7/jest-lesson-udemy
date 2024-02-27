// toBe
it ("数値のテスト", () => {
  expect(2 + 2).toBe(4);
});

// toEqual
it ("配列のテスト", () => {
  const arr1 = [1,2,3];
  const arr2 = [1,2,3];
  expect(arr1).toEqual(arr2);
});

it ("オブジェクトのテスト", () => {
  const person = {
    name: ["Bob", "Smith"],
  };
  const person2 = {
    name: ["Bob", "Smith"],
  };
  expect(person).toEqual(person2);
});

// not
it("2+2=5ではない", () => {
  expect(2+2).not.toBe(5);
});