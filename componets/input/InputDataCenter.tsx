import React from "react";
import {SegmentedButtons} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {ChangeEventProps} from "../type/Typs";


export default function InputDataCenter(props: ChangeEventProps) {

  const [value, setValue] = React.useState('Mana')

  const onChangeEvent = (dcName :String) => {
    props.changeEvent(dcName)
    setValue(dcName)
  }

  return (
    <View style={styles.container}>
      <SegmentedButtons buttons={[
        {value: 'Mana', label: 'Mana'},
        {value: 'Gaia', label: 'Gaia'},
        {value: 'Elemental', label: 'Elemental'},
        {value: 'Meteor', label: 'Meteor'}
      ]} value={value} onValueChange={onChangeEvent}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})