import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import IProduct from '../model/product';
import productService from '../service/productService';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        productService.getAllProducts().then(setProducts);
    }, []);

    return (
        <FlatList
            data={products}
            style={{ flex: 1, width: '100%' }}
            keyExtractor={item => `category-${item.id}`}
            renderItem={({ item }) => <ProductCard product={item} />}
        />
    );
};

export default Home;
