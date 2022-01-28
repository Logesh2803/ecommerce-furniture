/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      name: {
        marginLeft: 20,
        marginTop: 20

      },
      gridView: {
        marginVertical: 10,
        flex: 1,
        backgroundColor: '#F5F5F5',
        marginRight: -20,
        marginTop: -7,


      },
      thumbnail: {
        width: 200,
        height: 300,
        marginLeft: '-3%',
        marginRight: '150%'

      },
      nameMiddle: {
        marginTop: -30,
        marginLeft: 20
      },
      itemName: {
        fontSize: 18,
        color: 'black',
        fontWeight: '700',
      },
      itemRate: {
        fontSize: 15.5,
        color: '#343434',
        fontWeight: '600',
      },
      itemContainer: {

        borderRadius: 5,
      },
      slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",

      },

      bottomView: {

        width: '100%',
        height: 40,
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-around',

        position: 'absolute',
        bottom: 0,
        paddingVertical: 5,
        flexDirection: 'row'
      },

      textStyleLeft: {

        color: 'black',
        fontSize: 17,
        fontWeight: '600',
        left: 2,
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        paddingLeft: 10
      },

      textStyleRight: {

        color: '#080808',
        fontSize: 17,
        fontWeight: '600',
        left: -12
      },
      row: {
        flexDirection: 'row'
      },
      remove: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red'
      },
      row1: {
        flexDirection: 'row',
        marginTop: 20,


      },


    }),
  }
}
