import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import IProduct from '../model/product';
import productService from '../service/productService';
import ProductCard from '../components/ProductCard';
import { Entypo } from '@expo/vector-icons';

const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        productService.getAllProducts().then(setProducts);
    }, []);

    return (
        <View style={{ width: '100%', marginBottom: 200 }}>
            <StyledCartContainer>
                <StyledCartInnerContainer>
                    <Entypo name="shopping-cart" size={24} color="black" />
                    <StyledText>0</StyledText>
                </StyledCartInnerContainer>
            </StyledCartContainer>

            <FlatList
                data={products}
                keyExtractor={item => `category-${item.id}`}
                renderItem={({ item }) => <ProductCard product={item} />}
            />
        </View>
    );
};

const StyledCartContainer = styled.View`
    width: 100%;
`;

const StyledCartInnerContainer = styled.View`
    flex-direction: row;
    margin: 55px 25px 20px auto;
`;

const StyledText = styled.Text`
    height: 20px;
    width: 20px;

    background-color: ${({ theme }) => theme.colors.emphasis};
    margin-top: -10px;

    border-radius: 25px;
    text-align: center;
`;

export default Home;
