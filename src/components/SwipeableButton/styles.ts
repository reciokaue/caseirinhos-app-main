import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  swipeable: {
    width: '100%',
    height: 80,
    overflow: "visible",
    marginBottom: 28,
  },
  container: {
    backgroundColor: '#F3F7F5',
    width: '100%',
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
  },
  addButtonContainer: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    height: 80,
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
  removeButtonContainer: {
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    height: 80,
    width: 80,
    left: 16,
    overflow: "hidden",
  },
  removeButton: {
    flex: 1,
    backgroundColor: theme.colors.gold,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 13,
  },
  image: {
    backgroundColor: '#C4C4C4',
    height: 80,
    width: 80,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  amount:{
    fontSize: 25,
    color: theme.colors.white,
    fontWeight: '700',
    padding: 5,
    zIndex: 5,
  },
  info:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: theme.colors.text,
    fontFamily: theme.fonts.jost,
  },
  price: {
    fontSize: 22,
    color: theme.colors.text,
    fontFamily: theme.fonts.poppins,
  },
});
