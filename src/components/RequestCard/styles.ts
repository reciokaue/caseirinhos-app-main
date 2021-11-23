import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 190,
    padding: 25,
    backgroundColor: theme.colors.line,
    borderRadius: 20,
    justifyContent: "space-between",
    marginBottom: 32,
  },
  row: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 18,
    color: theme.colors.text,
    fontFamily: theme.fonts.dmBold,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.text,
    fontFamily: theme.fonts.dmRegular,
  },

  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },
  itemTitle: {
    fontSize: 20,
    color: theme.colors.text,
    fontFamily: theme.fonts.jost,
    textAlign: "center"
  },
  itemImage: {
    width: 37,
    height: 37,
    backgroundColor: '#c4c4c4',
    borderRadius: 80
  },
  listItems:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});
