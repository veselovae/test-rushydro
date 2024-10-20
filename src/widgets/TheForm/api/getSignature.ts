import { signatureData } from "@/features/model/signatureData";
export const getSignature = async (): Promise<signatureData> => {
  const data: signatureData = await fetch("http://127.0.0.1:8000/").then(
    (res) => res.json()
  );

  return data;
};
