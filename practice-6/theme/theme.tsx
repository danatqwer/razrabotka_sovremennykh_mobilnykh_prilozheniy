import { Appearance } from "react-native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

const isLightTheme = Appearance.getColorScheme() === 'light';
const defaultTheme = isLightTheme ? MD3LightTheme : MD3DarkTheme;

const Theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        primary: "#0000FF",
    },
    fonts: {
        ...defaultTheme.fonts,
        default: {
            fontFamily: 'Quicksand'
        },
    },
}

export default Theme;