import CartProductItem from "@/components/CartProductItem";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export default function HomeScreen() {
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Comfy Sneakers",
      description: "Lightweight everyday sneakers",
      price: 69.99,
      image: "https://picsum.photos/seed/1/150",
      quantity: 1,
    },
    {
      id: "2",
      name: "Classic Watch",
      description: "Elegant analog watch with leather strap",
      price: 159.0,
      image: "https://picsum.photos/seed/2/150",
      quantity: 1,
    },
    {
      id: "3",
      name: "Noise-cancelling Headphones",
      description: "Over-ear headphones with long battery life",
      price: 249.99,
      image: "https://picsum.photos/seed/3/150",
      quantity: 1,
    },
  ]);

  function handleBuy(item: Product) {
    Alert.alert(
      "Purchase",
      `Bought ${item.name} for $${item.price.toFixed(2)}`
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.cardWrap}>
            <CartProductItem product={item} />
            <View style={styles.buyRow}>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => handleBuy(item)}
              >
                <Text style={styles.buyButtonText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: { padding: 8, backgroundColor: "#fff" },
  cardWrap: { marginBottom: 8, backgroundColor: "#fff" },
  buyRow: { paddingHorizontal: 12, paddingBottom: 12, alignItems: "flex-end" },
  buyButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buyButtonText: { color: "#fff", fontWeight: "700" },
});
