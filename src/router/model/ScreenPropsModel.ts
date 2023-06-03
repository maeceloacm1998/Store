import { ParamListBase, RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

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

export type ScreenNavigationProp =  DrawerNavigationProp<StackParamsList>;
export type ParamsNavigationProp = ParamListBase;
export interface ScreenProps {
  navigation: ScreenNavigationProp;
  route: RouteProp<ParamsNavigationProp>;
}