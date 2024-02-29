import { delay } from "./async_func";

it("delayが指定された時間後にメッセージを返却", async () => {
  const result = await delay("hello world", 1500);
  expect(result).toBe("hello world");
})

it("timeが-の場合はエラー", async () => {
  try {
    const result = await delay("hello world", -1);
  } catch (error: any) {
    expect(error.message).toBe("timeは0以上で指定してください");
  }
});