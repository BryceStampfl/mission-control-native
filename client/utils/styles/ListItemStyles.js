
import { StyleSheet } from 'react-native'
import { pixelListItemMedium, pixelListItemSmall, pixelListItemExtraSmall } from 'utils/styles'

import {defaultBackgroundColor, defaultSpacing, defaultBorder} from './styles'

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

