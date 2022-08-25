import { AxiosError, AxiosResponse } from 'axios';
import productApi from '../api/productApi';
import HttpStatus from '../model/enum/httpStatus';
import IProduct from '../model/product';

const productService = () => {
    const getAllProducts = async (): Promise<IProduct[]> => {
        try {
            const result: AxiosResponse<IProduct[]> = await productApi.getAllProducts();
            if (result.status === HttpStatus.OK && result.data != null) {
                return Promise.resolve(result.data);
            }

            return Promise.reject({ status: result.status } as AxiosResponse);
        } catch (error) {
            const { response } = error as AxiosError;

            console.error(response);
            return Promise.reject(response);
        }
    };

    return {
        getAllProducts,
    };
};

export default productService();
