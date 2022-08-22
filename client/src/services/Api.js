import axios from "axios";

export default() => {
  return axios.create({
	  baseURL:"http://13.214.156.49:8088/"
  });
};
