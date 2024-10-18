// import { useForm } from "../../app/store/store.js";

// const store = useForm();

export const getRequst = async (func) => {
  const data = await fetch("http://127.0.0.1:8000/").then((res) => res.json());
  //   console.log(vmodel);

  //   store.updateSignatureData(data);
  func(data);

  //   vmodel.value = data;
  console.log(data);
};
