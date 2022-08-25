import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../model/product';

interface IState {
    productList: IProduct[];
}

const initialState: IState = {
    productList: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action: PayloadAction<IProduct>) {
            state.productList.push(action.payload);
        },
        removeProductCart(state, action: PayloadAction<number>) {
            state.productList.splice(action.payload, 1);
        },
    },
});

export const { removeProductCart, addCart } = cartSlice.actions;

export default cartSlice.reducer;
