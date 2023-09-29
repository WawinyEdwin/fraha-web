import { IService } from "@/app/_components/types";
import axios from "axios";

const backendUrl = process.env.api;

const loginUrl = backendUrl + "/auth/login";
const registerUrl = backendUrl + "/auth/register";
const servicesUrl = backendUrl + "/services";

export const loginUser = async (loginData: any) => {
  try {
    return await axios.post(loginUrl, loginData);
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (registerData: any) => {
  try {
    return await axios.post(registerUrl, registerData);
  } catch (error) {
    console.error(error);
  }
};

export const getServices = async () => {
  try {
    const { data } = await axios.get(servicesUrl);
    return data as IService[];
  } catch (error) {
    console.error(error);
  }
};
