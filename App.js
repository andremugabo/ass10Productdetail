import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";

const ProductDetailScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [addToCartAnimation] = useState(new Animated.Value(0));

  // Function to handle adding the product to the cart
  const addToCart = () => {
    // Perform the necessary logic to add the product to the cart

    // Animate the "Add to Cart" button
    Animated.sequence([
      Animated.timing(addToCartAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(addToCartAnimation, {
        toValue: 0,
        duration: 300,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/pro.png")} style={styles.image} />
      <Text style={styles.description}>
        Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed vitae magna sed nisl semper volutpat.
      </Text>
      <Text style={styles.price}>$99.99</Text>

      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity:</Text>
        <TouchableOpacity
          onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={addToCart} style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.addToCartAnimation,
          { transform: [{ scale: addToCartAnimation }] },
        ]}
      >
        <Text style={styles.addToCartAnimationText}>Added to Cart!</Text>
      </Animated.View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 16,
    resizeMode: "cover",
  },
  description: {
    marginBottom: 16,
    textAlign: "center",
  },
  price: {
    marginBottom: 16,
    fontWeight: "bold",
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityLabel: {
    marginRight: 8,
  },
  quantityButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#DDDDDD",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  addToCartButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  addToCartAnimation: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 122, 255, 0.8)",
    zIndex: 100,
  },
  addToCartAnimationText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
};

export default ProductDetailScreen;
