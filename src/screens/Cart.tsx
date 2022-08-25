import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const Cart = () => {
    return (
        <StyledContainer>
            <StyledTitle>CARRINHO</StyledTitle>
            <StyledCartIconContainer>
                <Entypo name="shopping-cart" size={24} color="black" />
            </StyledCartIconContainer>

            
        </StyledContainer>
    );
}

const StyledContainer = styled.View`
    background-color: #222222;
`;

const StyledTitle = styled.Text`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.text_color};
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;
    padding-top: ${Platform.OS === 'android' ? '55px' : '30px'};
`;

const StyledCartIconContainer = styled.View`
    align-items: center;
    margin-top: 25px;
`;

export default Cart;
