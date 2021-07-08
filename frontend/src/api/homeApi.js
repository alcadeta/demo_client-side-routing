import axios from "axios";
import { backendUrl } from "../constants";

const homeApi = {
    getData: () => axios.get(backendUrl)
};

export default homeApi;
