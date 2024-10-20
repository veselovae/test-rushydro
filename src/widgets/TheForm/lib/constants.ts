import { ITextField, ITelField } from "../model/inputFields";

export const formTextFields: ITextField[] = [
  { label: "Фамилия Имя", type: "text", model: "name" },
  { label: "Должность", type: "text", model: "position" },
  { label: "Подразделение", type: "text", model: "department" },
  { label: "Местоположение", type: "text", model: "address" },
];

export const formTelFields: ITelField[] = [
  {
    label: "Рабочий телефон",
    type: "tel",
    model: "office_phone_number",
    mask: "+7(###) ###-##-## (###)####",
  },
  {
    label: "Мобильный телефон",
    type: "tel",
    model: "personal_phone_number",
    mask: "+7(###) ###-##-##",
  },
];
