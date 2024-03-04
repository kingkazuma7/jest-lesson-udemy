it("はじめてのmock", () => {
  // jset.fn()
  const mockFunc = jest.fn(() => "hello world"); //cb渡す
  expect(mockFunc()).toBe("hello world");
});

it("mockImplementation", () => {
  const mockFunc = jest.fn();
  mockFunc.mockImplementation(() => "hello world2");
  expect(mockFunc()).toBe("hello world2");
});