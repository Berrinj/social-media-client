import { logout } from "./logout.js";

/* mock for localStorage */
const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();

global.localStorage = localStorageMock;

/* test */
describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should remove the token from localStorage", () => {
    localStorage.setItem("token", "mockToken");

    logout();

    expect(localStorage.getItem("token")).toBeNull();
  });
});
