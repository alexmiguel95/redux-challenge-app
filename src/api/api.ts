import axios, { AxiosRequestConfig } from 'axios';
import { MY_IP } from 'react-native-dotenv';

const api = () => {
    const config: AxiosRequestConfig = {
        baseURL: MY_IP,
        timeout: 60 * 1000,
    };

    return axios.create(config);
};

export default api();
