import { fields } from "@/features/model/interfaces.ts";

type typeField = "text" | "tel";

export interface ITextField {
  label: string;
  type: typeField;
  model: fields;
}

export interface ITelField extends ITextField {
  mask: string;
}
