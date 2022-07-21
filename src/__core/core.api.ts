import axios from "axios";

import { baseURL } from "../config/config";

export const AppAxiosGetInstance = ({
  path,
  data,
}: {
  path?: string;
  data?: string;
}) => {
  return axios.create({
    baseURL: path ? `${baseURL}/${path}` : baseURL,
    timeout: 2000,
    method: "GET",
    data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      mode: "no-cors",
    },
  });
};

export const AppAxiosPostInstance = (path: string) => {
  return axios.create({
    baseURL: `${baseURL}/path`,
    timeout: 2000,
    method: "GET",
  });
};
