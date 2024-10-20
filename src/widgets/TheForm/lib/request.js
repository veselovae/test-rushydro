export const getRequst = async (callback) => {
  const data = await fetch("http://127.0.0.1:8000/").then((res) => res.json());
  callback(data);
};
