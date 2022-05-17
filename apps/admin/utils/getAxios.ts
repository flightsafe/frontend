import axios, { AxiosInstance } from "axios";
import Cookie from "js-cookie";
import { serviceOptions } from "api-client";

/**
 * Returns an axios client with service options set up
 */
export const getAxios = (): AxiosInstance => {
  const token = Cookie.get("token");
  let client: AxiosInstance;
  if (token) {
    client = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    client = axios.create({});
  }
  serviceOptions.axios = client;
  return client;
};
