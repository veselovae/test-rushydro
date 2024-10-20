import { signatureData } from "@/features/model/interfaces";

export const getRequst = async (callback: Function): Promise<void> => {
  const data: signatureData = await fetch("http://127.0.0.1:8000/").then(
    (res) => res.json()
  );
  callback(data);
};
