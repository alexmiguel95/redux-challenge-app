import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import './ReactotronConfig';
import Routes from './src/routes/Routes';
import theme from './src/theme/theme';

export default function App() {
    return (
        <SafeAreaView>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaView>
    );
}
