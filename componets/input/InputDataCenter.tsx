import React from "react";
import {SegmentedButtons} from "react-native-paper";
import {StyleSheet, View} from "react-native";

type ChangeEventProps = {
  changeDCName: Function
}

export default function InputDataCenter(props: ChangeEventProps) {

  const [value, setValue] = React.useState('Mana')

  const onChangeEvent = (dcName :String) => {
    if(props.changeDCName != undefined) {
      props.changeDCName(dcName)
    }
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})