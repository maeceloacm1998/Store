import { ScreenNavigationProp } from "../../../router/model/ScreenPropsModel";

export interface TollbarProps {
    navigation: ScreenNavigationProp,
    isNavigationHeader?: Boolean,
    clickGoBackListener?: () => void,
}