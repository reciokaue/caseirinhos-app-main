import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32 +getStatusBarHeight(),
    padding: 32,
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
  },
  brandText:{
    color: theme.colors.text,
    fontSize: 18,
    textAlign: "left",
    fontFamily: theme.fonts.dmBold,
  },
  messageTitle:{
    color: theme.colors.text,
    fontSize: 42.85,
    lineHeight: 41.5,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
    paddingVertical: 12,
    marginVertical: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
  },
  image: {
    flex: 1,
    aspectRatio: 1.5, 
    resizeMode: 'contain'
  },
});