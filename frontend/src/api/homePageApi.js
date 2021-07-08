import axios from "axios";
import { backendUrl } from "./_shared";

const homePageApi = {
    get: () => axios.get(`${backendUrl}/`)
};

export default homePageApi;
