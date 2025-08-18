import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/slice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <Button title="➕ Increment" onPress={() => dispatch(increment())} />
      <Button title="➖ Decrement" onPress={() => dispatch(decrement())} />
      <Button title="🔄 Reset" onPress={() => dispatch(reset())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
