import axios, { AxiosRequestConfig } from 'axios';
import { MY_IP } from 'react-native-dotenv';

const api = () => {
    const path = MY_IP;
    
    const config: AxiosRequestConfig = {
        baseURL: path,
        timeout: 60 * 1000,
    };

    return axios.create(config);
};

export default api();
