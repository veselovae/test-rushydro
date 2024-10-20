import { signatureData } from "./model/interfaces";

const getImgBase64 = async (str: string, callback: Function): Promise<void> => {
  const pattern = /\/src(.*).png/g;
  const url = str.match(pattern)[0];

  await fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        str = str.replace(url, reader.result as string);

        callback(str);
      };
      reader.readAsDataURL(blob);
    });
};

const transformHtml = (html: string) => {
  const pattern = /data-v-[\da-z]{0,9}=""/gi;

  const replaceParams: [string | RegExp, string][] = [
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

export const getHTMLCopy = async (ref: string): Promise<void> => {
  const html = transformHtml(ref);

  await getImgBase64(html, (data: string) => {
    navigator.clipboard.writeText(data);
  });
};

import { fields } from "./constants";

export const getTextCopy = (storeData: signatureData) => {
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
