import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32 +getStatusBarHeight(),
    padding: 32,
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
  },
  title: {
    color: theme.colors.gold,
    fontSize: 38,
    textAlign: "left",
    fontFamily: theme.fonts.poppins,
    marginTop: 12,
    lineHeight: 40.5,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 18,
    textAlign: "left",
    fontFamily: theme.fonts.dmBold,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  line: {
    width: 102,
    height: 1,
    backgroundColor: theme.colors.text,
    marginHorizontal: 16,
  },
  separatorText: {
    color: theme.colors.text,
    fontSize: 12,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  image: {
    flex: 1,
    aspectRatio: 1.5, 
    resizeMode: 'contain'
  }
});