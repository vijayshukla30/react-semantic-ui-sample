import axiosInstance from "../../../helpers/axiosInstance";

/* eslint-disable import/no-anonymous-default-export */
export default async (history) => {
  try {
    const response = await axiosInstance(history).get("/contacts/");
    console.log("response.data :>> ", response.data);
  } catch (error) {
    console.log("error :>> ", error);
  }
};
