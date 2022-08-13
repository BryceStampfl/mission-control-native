
import { StyleSheet, PixelRatio } from 'react-native'
import {defaultBackgroundColor, defaultSpacing, defaultBorder} from './defaultStyleAttributes'

// Basic styles for the ListItem components that are frequently sharing styling

const pixelExtraSmall = PixelRatio.get() * 17;
const pixelSmall = PixelRatio.get() * 20;
const pixelMedium = PixelRatio.get() * 25;


const basicStyle =({
   //Color
   ...defaultBackgroundColor,

   //Spacing
   ...defaultSpacing,

   //Borders
   ...defaultBorder
})

export const Style = StyleSheet.create({
    basic: {
        ...basicStyle
    },
})

export const ListItemStyle = StyleSheet.create({
    basicExtraSmall: {
        ...basicStyle,
        height: pixelExtraSmall,
    },
    basicSmall: {
        ...basicStyle,
        height: pixelSmall,
    },
    basicMedium: {
        ...basicStyle,
        height: pixelMedium,
    },
})


