import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../src/components/RoundedButton';
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        label="What would you like to focus on"
        onChangeText={setSubject}
        style={styles.TextInput}
      />

      <View style={styles.button}>
        <RoundedButton title="+" size={50} onPress= {() => addSubject(subject)}/>
      </View>
    </View>
  </View>
)
};

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    justifyContent: 'center',
  },
  TextInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
