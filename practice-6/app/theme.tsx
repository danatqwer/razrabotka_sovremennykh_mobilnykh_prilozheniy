import { MD3LightTheme as LightTheme, MD3DarkTheme as DarkTheme } from "react-native-paper";

const Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'blue',
        secondary: 'red',
    },
    fonts: {
        ...DarkTheme.fonts,
        default: {
            fontFamily: 'Quicksand'
        },
    },
}

export default Theme;