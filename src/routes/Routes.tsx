import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/Cart';
import Home from '../screens/Home';

export type TypeRoute = {
    Home: undefined;
    Cart: undefined;
};

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
            <Screen name="Cart" component={Cart} />
        </Navigator>
    );
};

export default Routes;
