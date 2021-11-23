import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F7F7F7',
    width: '100%',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    elevation: 5,
    zIndex: 100,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  row:{
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    width: '100%',
  },
  title:{
    color: theme.colors.text,
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: theme.fonts.poppins,
  },
  clear:{
    color: '#E83F5B',
    width: '100%',
    fontSize: 15,
    fontWeight: "700",
    fontFamily: theme.fonts.jost,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    position: "relative",
    paddingTop: 32,
  },
  subtitle: {
    color: theme.colors.text,
    width: '100%',
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 15,
    textAlign: "left",
    marginHorizontal: 32,
  },
  scrollContainer:{
    flexGrow: 1,
    width: "100%",
    paddingTop: 16,
    paddingHorizontal: 32,
  },
  progress: {
    width: '50%',
    height: 10,
    backgroundColor: theme.colors.gold,
  }
});