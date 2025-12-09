import CartProductItem from "@/components/CartProductItem";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// /Users/user/Documents/rn/AppMe/app/screens/Cart.tsx

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Product 1",
      description: "High quality item",
      price: 29.99,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: "2",
      name: "Product 2",
      description: "Premium selection",
      price: 49.99,
      image: "https://via.placeholder.com/150",
      quantity: 2,
    },
  ]);

  const totalPrice = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CartProductItem product={item} />}
          scrollEnabled={true}
        />
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  footer: { padding: 16, borderTopWidth: 1, borderTopColor: "#e0e0e0" },
  totalText: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  payButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  payButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default Cart;
