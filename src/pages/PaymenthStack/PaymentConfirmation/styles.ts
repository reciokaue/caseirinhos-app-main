import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 70 + getStatusBarHeight(),
  },
  title: {
    fontSize: 32,
    fontFamily: theme.fonts.poppins,
    color: theme.colors.text,
    textAlign: "left",
    paddingHorizontal: 32,
  },
  subContainer: {
    width: '100%',
    paddingBottom: 32,
  },
  progress: {
    width: '100%',
    height: 10,
    backgroundColor: theme.colors.gold,
  }
});