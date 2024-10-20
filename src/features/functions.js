const getImgBase64 = async (str, callback) => {
  const pattern = /\/src(.*).png/g;
  const url = str.match(pattern)[0];

  await fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        str = str.replace(url, reader.result);
        callback(str);
      };
      reader.readAsDataURL(blob);
    });
};

const transformHtml = (html) => {
  const pattern = /data-v-[\da-z]{0,9}=""/gi;

  const replaceParams = [
    [pattern, ""],
    ["  ", " "],
    ["<!--v-if-->", ""],
  ];

  let newHTML = html;
  replaceParams.forEach((params) => {
    newHTML = newHTML.replaceAll(...params);
  });

  return newHTML;
};

export const getHTMLCopy = async (ref) => {
  const html = transformHtml(ref);

  await getImgBase64(html, (data) => {
    navigator.clipboard.writeText(data);
  });
};

import { fields } from "./constants";

export const getTextCopy = (storeData) => {
  let text = `C уважением`;
  fields.forEach((el) => {
    if (el === "") {
      text += "\n";
    } else if (storeData[el]) {
      text += "\n" + storeData[el];
    }
  });

  navigator.clipboard.writeText(text);
};
