import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const Navlink = ({ navigation, text, onsubmit }) => {
  return (
    <TouchableOpacity
      onPress={onsubmit}
    >
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    marginLeft: '6%',
    marginTop: '3%',
    color: "#0000ff",
  },
});

export default Navlink;