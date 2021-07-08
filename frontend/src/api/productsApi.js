import axios from "axios";
import { backendUrl } from "../constants";

const productsApi = {
    getProducts: () => axios.get(`${backendUrl}/products`)
};

export default productsApi;
