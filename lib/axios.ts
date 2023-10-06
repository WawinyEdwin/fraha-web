import { IBillData, ILoginCredentials, IService } from "@/lib/types";
import axios from "axios";
import { setBearerTokenHeaders } from "./utils";

const backendUrl = process.env.api;

const loginUrl = backendUrl + "/auth/login";
const registerUrl = backendUrl + "/auth/register";
const servicesUrl = backendUrl + "/services";
const staffUrl = backendUrl + "/staff";
const billUrl = backendUrl + "/bills";

export const loginUser = async (loginData: ILoginCredentials) => {
  const response = await axios.post(loginUrl, loginData);
  return response;
};

export const registerUser = async (registerData: ILoginCredentials) => {
  const response = await axios.post(registerUrl, registerData);
  return response;
};

export const getServices = async () => {
  const response = await axios.get(servicesUrl);
  return response;
};

export const getStaff = async () => {
  const response = await axios.get(staffUrl, {
    headers: await setBearerTokenHeaders(),
  });
  return response;
};

export const postBill = async (billData: IBillData) => {
  const response = await axios.post(billUrl, billData, {
    headers: await setBearerTokenHeaders(),
  });
  return response;
};
