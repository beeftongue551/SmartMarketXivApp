import {TextInput} from "react-native-paper";
import React from "react";
import {StyleSheet, View} from "react-native";
import {ChangeEventProps} from "../type/Typs";

export default function InputItemName(props: ChangeEventProps) {
  const [itemName, setItemName] = React.useState("");

  const onChangeEvent = (itemName :String) => {
    props.changeEvent(itemName)
    setItemName(itemName)
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="アイテム名"
        value={itemName}
        onChangeText={text => onChangeEvent(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
})