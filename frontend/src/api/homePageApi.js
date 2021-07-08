import axios from "axios";
import { backendUrl } from "./_shared";

const homePageApi = {
    getData: () => axios.get(`${backendUrl}/`)
};

export default homePageApi;
