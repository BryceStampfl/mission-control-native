
import { StyleSheet, PixelRatio } from 'react-native'
import {defaultBackgroundColor, defaultSpacing, defaultBorder} from './styles'

// Basic styles for the ListItem components that are frequently sharing styling

const pixelListItemExtraSmall = PixelRatio.get() * 17;
const pixelListItemSmall = PixelRatio.get() * 20;
const pixelListItemMedium = PixelRatio.get() * 25;

const basicStyle =({
   //Color
   ...defaultBackgroundColor,

   //Spacing
   ...defaultSpacing,

   //Borders
   ...defaultBorder
})

export const ListItemStyle = StyleSheet.create({
    basicStyle: {
        ...basicStyle,
    },
    basicExtraSmall: {
        ...basicStyle,
        height: pixelListItemExtraSmall,
    },
    basicSmall: {
        ...basicStyle,
        height: pixelListItemSmall,
    },
    basicMedium: {
        ...basicStyle,
        height: pixelListItemMedium,
    },
})


