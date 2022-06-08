
import { StyleSheet } from 'react-native'
import { pixelListItemMedium, pixelListItemSmall } from 'utils/styles'

const basic =({
   //Color
   backgroundColor: 'white',

   //Spacing
   marginVertical: 5,
   padding: 5,

   //Borders
   borderColor: '#808080',
   borderWidth: 1,
   borderRadius: 7,
})

export const ListItemStyle = StyleSheet.create({
    basicSmall: {
        ...basic,

        //Height
        height: pixelListItemSmall,

    },
    basicMedium: {
        ...basic,

        //Height
        height: pixelListItemMedium,
    },
})

