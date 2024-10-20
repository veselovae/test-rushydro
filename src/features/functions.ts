import { signatureData } from "./model/signatureData";

const getHTMLBase64 = async (
  str: string,
  callback: Function
): Promise<void> => {
  const imageSrcPattern = /\/src(.*).png/g;
  const imageUrl = str.match(imageSrcPattern)[0];
  let htmlBase64: string;

  await fetch(imageUrl)
    .then((res) => res.blob())
    .then((blob) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        htmlBase64 = str.replace(imageUrl, reader.result as string);

        callback(htmlBase64);
      };
      reader.readAsDataURL(blob);
    });
};

const formatHTML = (html: string) => {
  const pattern = /data-v-[\da-z]{0,9}=""/gi;

  const replaceParams: [string | RegExp, string][] = [
    [pattern, ""],
    ["  ", " "],
    ["<!--v-if-->", ""],
  ];

  let formatedHTML = html;
  replaceParams.forEach((params) => {
    formatedHTML = formatedHTML.replaceAll(...params);
  });

  return formatedHTML;
};

export const copyHTML = async (ref: string): Promise<void> => {
  const html = formatHTML(ref);

  await getHTMLBase64(html, (data: string) => {
    navigator.clipboard.writeText(data);
  });
};

import { fields } from "./constants";

export const copyText = (storeData: signatureData) => {
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
