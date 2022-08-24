import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import './ReactotronConfig';
import Home from './src/screens/Home';
import theme from './src/theme/theme';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
