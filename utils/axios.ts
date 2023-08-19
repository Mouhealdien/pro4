import base from "axios"
import { toast } from "react-toastify";
import { BASE_SERVER_URL } from "./constants"

export const axios = base.create({
    baseURL: BASE_SERVER_URL + '/api',
    withCredentials: true,

});

const errorHandler = (e) => {


    toast.error(e?.response?.data?.error?.message || 'Something went wrong');
    return Promise.reject({ ...e });
}
axios.interceptors.response.use(
    rs => rs,
    e => errorHandler(e)
)
