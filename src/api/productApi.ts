import { AxiosResponse } from 'axios';
import IProduct from '../model/product';
import api from './api';

const productApi = () => {
    const getAllProducts = (): Promise<AxiosResponse<IProduct[]>> => {
        return api.get<IProduct[]>('/products');
    };

    return {
        getAllProducts,
    };
};

export default productApi();
