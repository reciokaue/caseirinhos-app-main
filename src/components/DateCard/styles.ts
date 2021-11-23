import { forVerticalIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    width: 90,
    height: 90,
    backgroundColor: '#F2F4F3',
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse",
  },
  selected:{
    borderColor: '#E83F5B8C',
    borderWidth: 3,
  },
  title: {
    fontSize: 37,
    fontWeight: "bold",
    color: '#E83F5B',
    fontFamily: theme.fonts.jost,
  },
  subtitle: {
    fontSize: 15,
    color: '#E83F5B',
    fontFamily: theme.fonts.jost,
  },
});