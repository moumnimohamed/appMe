import { StyleSheet } from "react-native";

import Cart from "../screens/cart";

export default function TabTwoScreen() {
  return <Cart />;
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
