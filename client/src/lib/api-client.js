import axios from "axios";
import {HOST} from "@/utlis/constants"

const apiClient =axios.create({
    baseURL: HOST,
});

export default apiClient