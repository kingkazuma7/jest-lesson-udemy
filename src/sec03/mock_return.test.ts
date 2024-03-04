it("モック関数に戻り値をせっていする", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
});

it("モック関数に一度だけ返される戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe(undefined);
});

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  // mockFunc.mockRejectedValue("resolved value");
  // const result = await mockFunc();
  // expect(result).toBe("resolved value")
  try {
    await mockFunc(); // This will throw an error because mockFunc is set to reject
  } catch (error) {
    expect(error).toBe("resolved value"); // Assert that the error thrown matches the rejected value
  }
});