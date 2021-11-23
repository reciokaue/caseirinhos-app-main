import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: theme.colors.gold,
    height: 375,
    width: '100%',
    borderBottomLeftRadius: 69,
    borderBottomRightRadius: 69,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  header: {
    marginTop: getStatusBarHeight(),
    width: '100%',
    // position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerButton:{
    paddingHorizontal: 32,
    paddingVertical: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 20,
    width: '100%',
    alignItems: "flex-start",
    justifyContent: "center",
  },
  scrollLinks: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    // backgroundColor: '#000',

  },
  ellipsi:{
    width: 11,
    height: 11,
    backgroundColor: '#000',
    marginHorizontal: 3.5,
    borderRadius: 22,
    opacity: 0.5,
  },
  info: {
    paddingHorizontal: 32,
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    color: theme.colors.text,
    fontSize: 32,
    fontFamily: theme.fonts.poppins,
  },
  about: {
    color: theme.colors.text,
    fontSize: 18,
    fontFamily: theme.fonts.roboto,
  },
  price: {
    color: theme.colors.text,
    fontSize: 25,
    fontFamily: theme.fonts.jost,
    marginTop: 25,
  },
  buttons: {
    flexDirection: "row",
    paddingHorizontal: 32,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  buttonAddSub:{
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: theme.colors.line,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 23,
  },
  action: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  amount: {
    fontSize: 19,
    fontFamily: theme.fonts.poppins,
    color: '#29292E',
    paddingHorizontal: 5,
  },
  minus: {
    fontSize: 19,
    fontFamily: theme.fonts.poppins,
    color: theme.colors.red,
  },
  plus: {
    fontSize: 19,
    fontFamily: theme.fonts.poppins,
    color: theme.colors.input,
  },
  redFit: {
    width: '60%',
    backgroundColor: theme.colors.red,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  titleRed: {
    fontSize: 14,
    color:  theme.colors.white,
    fontFamily: theme.fonts.jost,
  }
});