import React from 'react';
import { Button, Text } from 'react-native';
import IProduct from '../../model/product';
import { maskAmount } from '../../model/utils/stringUtils';
import { StyledContainer, StyledDescriptionContainer, StyledEmphasis, StyledHeader, StyledImage, StyledInnerContainer, StyledName, StyledPrice, StyledText } from './styled';

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

export default ProductCard;
