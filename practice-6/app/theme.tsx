import { Appearance } from "react-native";
import { MD3LightTheme, MD3DarkTheme, Surface, MD3Colors } from "react-native-paper";
import { ElevationLevels } from "react-native-paper/lib/typescript/types";

const isLightTheme = Appearance.getColorScheme() === 'light';
const defaultTheme = isLightTheme ? MD3LightTheme : MD3DarkTheme;

const Theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        primary: "#0000FF",
        secondary: "#FF00FF",
        surfaceVariant: '#E0E0F0'
    },
    fonts: {
        ...defaultTheme.fonts,
        default: {
            fontFamily: 'Quicksand'
        },
    },
}

export default Theme;