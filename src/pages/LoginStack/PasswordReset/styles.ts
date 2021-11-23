import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "flex-end",
    backgroundColor: theme.colors.white,
    paddingTop: 32 + getStatusBarHeight(),
    padding: 32,
  },
  title: {
    color: theme.colors.gold,
    fontSize: 52,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
    fontWeight: "bold",
    marginTop: 12,
    lineHeight: 50.3,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 32,
    lineHeight: 38,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
  },
  brandText:{
    color: theme.colors.text,
    fontSize: 18,
    textAlign: "left",
    fontFamily: theme.fonts.dmBold,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    aspectRatio: 1.5, 
    resizeMode: 'contain'
  },
  forgotPassword: {
    color: theme.colors.gold,
    fontSize: 12,
    textAlign: "left",
    fontFamily: theme.fonts.roboto,
  }
});