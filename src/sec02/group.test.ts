describe("配列のテスト", () => {
  it("配列に要素を追加できる", () => {
    const arr = [];
    arr.push("elem");
    expect(arr).toEqual(["elem"]);
  });
  
  it("配列の長さが正しい", () => {
    const arr = ["elem1", "elem2"];
    expect(arr.length).toBe(2);
  });
  
  describe("配列の検索に関するテスト", () => {
    it("配列の要素を検索できる", () => {
      const arr = ["elem1", "elem2"];
      expect(arr.indexOf("elem1")).toBe(0);
    })
  });
});