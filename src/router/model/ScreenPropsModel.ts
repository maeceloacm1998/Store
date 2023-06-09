import { ParamListBase, RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export interface StackParamsList extends ParamListBase {
  Home: any;
}

export type ScreenNavigationProp =  DrawerNavigationProp<StackParamsList>;
export type ParamsNavigationProp = ParamListBase;
export interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: RouteProp<ParamsNavigationProp>;
}