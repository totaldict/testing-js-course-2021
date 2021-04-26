export const mockAuthInstance = {
  auth: {
    bio: null,
    createdAt: "2021-04-25T12:38:50.308Z",
    email: "hehe12345@mail.ru",
    id: 165267,
    image: null,
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY1MjY3LCJ1c2VybmFtZSI6ImhlaGUxMjM0NSIsImV4cCI6MTYyNDUzODMzMH0.dwKyHZq0cxWpHSoJluUHJKoda4mwLpUROy_QEg-Mcxs",
    updatedAt: "2021-04-25T12:38:50.322Z",
    username: "hehe12345",
  }
};

const mock = jest.fn().mockImplementation(() => {
  return {instance: mockAuthInstance};
});

export default mock;
