import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

// import { Container } from './styles';

export default function SearchBar({ value, setValue, inputAction }) {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={30} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        placeholder="Search"
        autoCorrect={false}
        value={value}
        onChangeText={setValue}
        onEndEditing={inputAction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 4,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 10
  }
});
