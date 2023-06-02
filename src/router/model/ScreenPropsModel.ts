import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface StackParamsList extends ParamListBase {
  InitialRouteUser: any;
  Home: any;
  Schedule: any;
  Profile: any;
  FilterList: any;
  CompanyPreview: any;
  Login: any;
  SelectionRegisterType: any;
  UserForm: any;
  EnterpriseForm: any;
  ScheduleForm: any;
  SchedulePreview: any;
}

export type ScreenNavigationProp = NativeStackNavigationProp<StackParamsList>;
export type ParamsNavigationProp = ParamListBase;
export interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: RouteProp<ParamsNavigationProp>;
}