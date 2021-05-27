import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB, Text } from "react-native-paper";
import { Fragment } from "react/cjs/react.development";

export const HomeScreen = ({ navigation }) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>You do not have any notes</Text>
        </View>
      </View>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        label="Add new note"
        onPress={() => navigation.navigate("EditContent")}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});
