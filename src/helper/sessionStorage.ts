const setSessionStorage = (key: string, value: string) =>
  typeof window !== "undefined" && sessionStorage?.setItem(key, value || "");

const getSessionStorage = (key: string) =>
  typeof window !== "undefined" && sessionStorage?.getItem(key);

export { setSessionStorage, getSessionStorage };
