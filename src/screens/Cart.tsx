import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configueStore';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import CartCard from '../components/CartCard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { removeProductCart } from '../redux/cart';

const Cart = () => {
    const { goBack } = useNavigation();
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state);

    return (
        <StyledContainer>
            <StyledTitle>CARRINHO</StyledTitle>
            <StyledCartIconContainer>
                <StyledGoBack onPress={() => goBack()}>
                    <Ionicons name="return-up-back-sharp" size={24} color="white" />
                </StyledGoBack>

                <Entypo name="shopping-cart" size={24} color="black" />
            </StyledCartIconContainer>

            <ScrollView>
                {cart.productList.map((product, index) => (
                    <CartCard product={product} key={`product-${index}`} removeProduct={() => dispatch(removeProductCart(index))} />
                ))}
            </ScrollView>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    background-color: #222222;
    margin-top: ${Platform.OS === 'android' ? '25px' : '0'};
`;

const StyledTitle = styled.Text`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.text_color};
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;
    padding-top: 25px;
`;

const StyledCartIconContainer = styled.View`
    position: relative;

    align-items: center;
    margin-top: 25px;
`;

const StyledGoBack = styled.Pressable`
    position: absolute;
    left: 60px;
`;

export default Cart;
