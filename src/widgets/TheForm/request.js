export const getRequst = async (func) => {
  const data = await fetch("http://127.0.0.1:8000/").then((res) => res.json());
  func(data);
};
