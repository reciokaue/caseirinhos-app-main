import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  swipeable: {
    width: '100%',
    // height: 190,
    overflow: "visible",
    marginBottom: 28,
  },
  container: {
    backgroundColor: '#F3F7F5',
    width: '100%',
    flex: 1,
    borderRadius: 20,
    // height: 50,
  },
  addButtonContainer: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    // height: 190 + 50,
    height: '100%',
    width: 80,
    left: 16,
    overflow: "hidden",
  },
  addButton: {
    flex: 1,
    backgroundColor: '#E83F5B',
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 13,
  },
  image: {
    backgroundColor: '#C4C4C4',
    height: 190,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  amount:{
    fontSize: 19,
    color: theme.colors.text,
    fontWeight: '700',
    padding: 5,
  },
  info:{
    flex: 1,
    height: 95,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    color: theme.colors.text,
    fontFamily: theme.fonts.jost,
  },
  subtitle: {
    fontSize: 12,
    color: theme.colors.text,
    fontFamily: theme.fonts.dmRegular,
    textAlign: "left",
  },
  price: {
    fontSize: 22,
    color: theme.colors.text,
    fontFamily: theme.fonts.poppins,
  },
});
