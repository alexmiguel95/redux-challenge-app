import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import IProduct from '../model/product';
import productService from '../service/productService';
import ProductCard from '../components/ProductCard/ProductCard';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configueStore';
import { addCart } from '../redux/cart';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TypeRoute } from '../routes/Routes';
import { useNavigation } from '@react-navigation/native';

type TypeNavigation = NativeStackNavigationProp<TypeRoute, 'Cart'>;

const Home = () => {
    const navigation = useNavigation<TypeNavigation>();
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state);

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        productService.getAllProducts().then(setProducts);
    }, []);

    return (
        <View style={{ width: '100%' }}>
            <StyledCartContainer>
                <Pressable onPress={() => navigation.navigate('Cart')}>
                    <StyledCartInnerContainer>
                        <Entypo name="shopping-cart" size={24} color="black" />
                        <StyledText>{cart.productList.length}</StyledText>
                    </StyledCartInnerContainer>
                </Pressable>
            </StyledCartContainer>

            <FlatList
                style={{ marginBottom: 100 }}
                data={products}
                keyExtractor={item => `category-${item.id}`}
                renderItem={({ item }) => <ProductCard product={item} addCart={() => dispatch(addCart(item))} />}
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
