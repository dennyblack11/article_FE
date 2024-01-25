import axios from "axios";

const URL: string =
  "";

export const getData = async () => {
  try {
    return await axios.get(URL).then((res: any) => {
      return res?.data?.results;
    });
  } catch (error) {
    return error;
  }
};
