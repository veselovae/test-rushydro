import { fields } from "@/features/model/signatureFields";

type typeInputField = "text" | "tel";

export interface ITextField {
  label: string;
  type: typeInputField;
  model: fields;
}

export interface ITelField extends ITextField {
  mask: string;
}
