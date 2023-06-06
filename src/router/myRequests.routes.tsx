import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyRequests from '../screen/myRequests';

const Stack = createNativeStackNavigator();

function MyRequestsRoutes() {
    return (
        <Stack.Navigator initialRouteName="MyRequests">
            <Stack.Screen
                name="MyRequests"
                component={MyRequests}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default MyRequestsRoutes;