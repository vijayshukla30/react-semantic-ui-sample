import axiosInstance from "../../helpers/axios";

export const register = async () => {
  try {
    const response = await axiosInstance.post("/auth/register", {});
    console.log("response.data :>> ", response.data);
  } catch (error) {
    console.log("error :>> ", error);
  }
};
