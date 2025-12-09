import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface Props {
  product: Product;
  onIncrease?: (id: string) => void;
  onDecrease?: (id: string) => void;
}

export default function CartProductItem({
  product,
  onIncrease,
  onDecrease,
}: Props) {
  const [imageUri, setImageUri] = useState(product.image);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        onError={() =>
          setImageUri(`https://picsum.photos/seed/${product.id}/150`)
        }
      />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <View style={styles.qtyRow}>
            <TouchableOpacity
              onPress={() => onDecrease && onDecrease(product.id)}
              style={styles.qtyButton}
            >
              <Text style={styles.qtyButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{product.quantity}</Text>
            <TouchableOpacity
              onPress={() => onIncrease && onIncrease(product.id)}
              style={styles.qtyButton}
            >
              <Text style={styles.qtyButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12,
    paddingVertical: 10,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#f6f6f6",
  },
  content: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  description: { color: "#666", fontSize: 13, marginBottom: 8 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: { fontSize: 15, fontWeight: "700" },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyButtonText: { fontSize: 20, fontWeight: "600" },
  quantity: { marginHorizontal: 12, minWidth: 20, textAlign: "center" },
});
