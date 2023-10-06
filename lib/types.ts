export interface IService {
  id: string;
  name: string;
  rate: string
}

export interface IStaff {
  id: string;
  name: string
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IBillData {
  customer: string;
  date: Date;
  service: number;
  staff: number;
  quantity: number;
  price: number;
  discount: number;
  cash: number;
  card: number;
}
