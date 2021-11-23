import { forVerticalIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selected:{
    borderColor: '#E83F5B8C',
    borderWidth: 6,
  },
  hour: {
    fontSize: 14,
    color: theme.colors.text,
  },
  radio:{
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: theme.colors.line,
    marginLeft: 16,
  },
});