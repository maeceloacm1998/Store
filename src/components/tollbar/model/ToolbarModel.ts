import { ScreenNavigationProp } from "../../../router/model/ScreenPropsModel";

export interface TollbarModel {
    navigation: ScreenNavigationProp,
    isNavigationHeader?: Boolean,
    clickGoBackListener?: () => void,
}