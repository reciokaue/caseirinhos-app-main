import { forVerticalIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  image: {
    width: 67,
    height: 51,
    backgroundColor: '#c4c4c4',
    borderRadius: 8,
  },
  info:{
    paddingHorizontal: 16,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#4D4D4D',
    marginBottom: 2,
    fontFamily: theme.fonts.jost,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.text,
    fontFamily: theme.fonts.dmRegular,
  },
  icon: {
    alignItems: 'center',
    justifyContent: "center",
  }
});