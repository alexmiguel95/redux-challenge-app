import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import IProduct from '../model/product';
import { maskAmount } from '../model/utils/stringUtils';

interface IProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledText>{`${product.offerPercentage}% OFF`}</StyledText>
                <StyledName>{product.brand}</StyledName>
            </StyledHeader>

            <StyledImage source={{ uri: `${product.imageUrl}` }} />

            <StyledInnerContainer>
                {product.isHighlight && <StyledEmphasis>Mais vendido</StyledEmphasis>}
                <StyledDescriptionContainer>
                    <Text style={{ marginBottom: 25, fontWeight: 'bold' }}>{product.name}</Text>
                    <Text style={{ color: '#BBBBBB', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{`R$ ${
                        maskAmount(product.price + ((product.price * 100) % product.offerPercentage))
                    }`}</Text>
                    <StyledPrice>{`${maskAmount(product.price)} à vista`}</StyledPrice>
                </StyledDescriptionContainer>

                <Button title="ADICIONAR AO CARRINHO" />
            </StyledInnerContainer>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    margin: 20px 25px;
    border: 1px solid #eee;
`;

const StyledHeader = styled.View`
    height: 40px;

    color: ${({ theme }) => theme.colors.emphasis};
    font-size: 12px;
    border-bottom-width: 1px;
    border-color: #eee;

    flex-direction: row;
    align-items: center;
`;

const StyledText = styled.Text`
    width: 150px;

    color: ${({ theme }) => theme.colors.emphasis_secondary};
    font-size: 16px;
    border-right-width: 1px;
    border-color: #eee;
    text-align: center;
    font-weight: bold;

    padding: 9px 0;
`;

const StyledName = styled.Text`
    color: ${({ theme }) => theme.colors.emphasis};
    font-size: 12px;
    text-align: center;
    font-weight: bold;

    flex-grow: 1;
`;

const StyledImage = styled.Image`
    width: 220px;
    height: 150px;
    margin: 0 auto;
`;

const StyledInnerContainer = styled.View`
    background-color: #333333;
    font-size: 12px;
    color: #eeeeee;
`;

const StyledDescriptionContainer = styled.View`
    margin: 30px 20px;
`;

const StyledPrice = styled.Text`
    color: ${({ theme }) => theme.colors.emphasis_secondary};
    font-weight: bold;
`;

const StyledEmphasis = styled.Text`
    width: 100px;
    margin-top: -10px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.emphasis};
    text-align: center;
`;

export default ProductCard;
