import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const logout = () => {
  localStorage.removeItem("access_token");
  window.location.href == "/";
  return;
};

export const retrieveFromLocalStorage = async (key: string) => {
  const item = localStorage.getItem(key);
  return item;
};

export const setBearerTokenHeaders = async () => {
  const token = await retrieveFromLocalStorage("access_token");
  const bearerToken: string = `Bearer ${token}`;
  const headers = {
    Authorization: bearerToken,
  };
  return headers;
};
