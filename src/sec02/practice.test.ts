/**
 * 【演習】
 *  1. `addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース
 *  2. `removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース
 *  3. `removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース
 */

// it("addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース", () => {
//   expect(addItem("HOGE")).toBe("HOGE");
  
// });
import { ShoppingList } from "./practice";

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;
  
  beforeEach(() => {
    shoppingList = new ShoppingList();
  });
  
  describe("addItem", () => {
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("apple");
      expect(shoppingList.list).toEqual(["apple"]);
    });
  });
  
  describe("removeItem", () => {
    it("アイテムをリストから削除", () => {
      shoppingList.addItem("apple");
      shoppingList.removeItem("apple");
      expect(shoppingList.list).not.toContain("apple"); //結果 配列に複数要素が存在するかマッチャー関数
    });
    
    it("リストにアイテムが存在しない場合はエラー", () => {
      expect(shoppingList.removeItem("banana")).toThrow("アイテム: bananaはリストにありません");
    });
  });
});