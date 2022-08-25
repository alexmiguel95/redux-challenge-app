import styled from 'styled-components/native';
import IProduct from '../model/product';
import { Text, Pressable } from 'react-native';

interface IProps {
    product: IProduct;
    removeProduct: () => void;
}

const CartCard = ({ product, removeProduct }: IProps) => {
    return (
        <StyledContainer>
            <StyledInnerContainer>
                <StyledImage source={{ uri: `${product.imageUrl}` }} />
                <StyledTextContainer>
                    <StyledText>{product.name}</StyledText>
                    <StyledTextHighLight>Oferta válida apenas para pix</StyledTextHighLight>
                </StyledTextContainer>
            </StyledInnerContainer>

            <StyledFooter>
                <Text>{product.price}</Text>
                <Pressable onPress={() => removeProduct()}>
                    <StyledRemoveButton>remover</StyledRemoveButton>
                </Pressable>
            </StyledFooter>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    padding: 5px;
    background-color: #191919;
    border-radius: 5px;
    margin: 15px 25px;
`;

const StyledInnerContainer = styled.View`
    padding: 5px;
    flex-direction: row;
`;

const StyledImage = styled.Image`
    width: 90px;
    height: 95px;
    border-radius: 5px;
`;

const StyledTextContainer = styled.View`
    margin: auto;
`;

const StyledText = styled.Text`
    color: ${({ theme }) => theme.colors.text_color};
    font-size: 12px;
    font-weight: bold;
`;

const StyledTextHighLight = styled.Text`
    color: ${({ theme }) => theme.colors.emphasis};
    font-size: 11px;
`;

const StyledFooter = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    border-top-width: 2px;
    border-color: #eee;
    padding: 20px 0;
    margin-top: 5px;
`;

const StyledRemoveButton = styled.Text`
    background-color: #333333;
    width: 85px;
    height: 25px;
    text-align: center;
    border-radius: 5px;
    padding-top: 2px;
`;

export default CartCard;
