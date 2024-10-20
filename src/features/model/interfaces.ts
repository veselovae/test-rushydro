export type fields =
  | "name"
  | "position"
  | "department"
  | ""
  | "office_phone_number"
  | "personal_phone_number"
  | "address";

export interface signatureData {
  id?: number;
  name: string;
  position: string;
  department: string;
  office_phone_number: string;
  personal_phone_number: string;
  address: string;
}
