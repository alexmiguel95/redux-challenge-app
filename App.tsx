import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './ReactotronConfig';
import store from './src/redux/configueStore';
import Routes from './src/routes/Routes';
import theme from './src/theme/theme';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </Provider>
        </ThemeProvider>
    );
}
