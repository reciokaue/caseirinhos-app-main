import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/LoginStack/Landing';
import LoginWithEmail from '../pages/LoginStack/Login';
import PasswordReset from '../pages/LoginStack/PasswordReset';
import DateScheduling from '../pages/DateStack/DateScheduling';
import ProductDetail from '../pages/ProductStack/ProductDetail';
import TabRoutes from './tab.routes';
import FollowRequests from '../pages/RequestStack/FollowRequests';
import CreateProduct from '../pages/ProductStack/CreateProduct';
import MapLocation from '../pages/LocationStack/MapLocation';
import FinalizingLocation from '../pages/LocationStack/FinalizingLocation';
import DateSetting from '../pages/DateStack/DateSetting';
import HourSetting from '../pages/DateStack/HourSetting';
import PaymentMethods from '../pages/PaymenthStack/PaymentMethods';
import Successful from '../pages/LoginStack/Successful';
import RequestDetail from '../pages/RequestStack/RequestDetail';

import UseAuthFirebase from '../hooks/useAuth';
import PaymentConfirmation from '../pages/PaymenthStack/PaymentConfirmation';

const Stack = createStackNavigator();

export function StackRoutes() {
  const { userId, logged} = UseAuthFirebase()

  return (
    <Stack.Navigator headerMode='none'>
      { userId != '' && logged? (<>
          <Stack.Screen name="TabRoutes" component={TabRoutes}/>
          <Stack.Screen name="MapLocation" component={MapLocation} />
          <Stack.Screen name="FinalizingLocation" component={FinalizingLocation} />
          <Stack.Screen name="FollowRequests" component={FollowRequests} />
          <Stack.Screen name="RequestDetail" component={RequestDetail} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="CreateProduct" component={CreateProduct} />
          <Stack.Screen name="DateScheduling" component={DateScheduling} />
          <Stack.Screen name="DateSetting" component={DateSetting} />
          <Stack.Screen name="HourSetting" component={HourSetting} />
          <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
          <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
        </>):(<>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
          <Stack.Screen name="Successful" component={Successful} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
        </>)
      }
    </Stack.Navigator>
  );
}
