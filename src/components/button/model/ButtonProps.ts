import { RectButtonProps } from "react-native-gesture-handler";

export interface ButtonProps extends RectButtonProps {
    title: string,
    backgroundColor?: string,
    textColor?: string,
    clickButtonListener: () => void,
    loading: boolean
}