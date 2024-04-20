/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [value, onChangeText] = React.useState(
    'This is a prefilled text inside this TextInput. Add more contents and check the selection prop',
  );

  const [selection, setSelection] = useState(
    Platform.OS === 'android' ? {start: 0} : null,
  );

  const handleOnFocus = () => {
    if (Platform.OS === 'android') {
      setSelection(null);
    }
  };

  const handleOnBlur = () => {
    if (Platform.OS === 'android') {
      setSelection({start: 0});
    }
  };

  /* We have used state variable to toggle the selection between {start:0} and 
    'null'. When input is on focus, set the selection to 0 and when the input is blurred,
    change the selection to null. 
  
    This works, when the input is being filled.

    This exact scenario does not work when the TextInput is readOnly or have some
    pre-filled data.

    Note: This issue is only coming on Android.
  */
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles?.container}>
          <Text>{'Text Input with prefilled data'}</Text>
          <TextInput
            onChangeText={text => onChangeText(text)}
            value={value}
            style={{
              padding: 10,
              width: 300,
              borderStartWidth: 1,
              borderEndWidth: 1,
              borderTopWidth: 1,
              boderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              marginBottom: 10,
              borderRadius: 10,
            }}
            placeholder="Enter long text here..."
            selection={selection}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          <Text>{'Text Input with readOnly data'}</Text>
          <TextInput
            onChangeText={text => onChangeText(text)}
            value={value}
            readOnly
            style={{
              padding: 10,
              width: 300,
              borderStartWidth: 1,
              borderEndWidth: 1,
              borderTopWidth: 1,
              boderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              marginBottom: 10,
              borderRadius: 10,
              backgroundColor: '#f2f2f2',
            }}
            placeholder="Enter long text here..."
            selection={selection}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />

          <Text>{'Change input focus here'}</Text>
          <TextInput
            placeholder="Use this to change focus"
            style={{
              padding: 10,
              width: 300,
              borderStartWidth: 1,
              borderEndWidth: 1,
              borderTopWidth: 1,
              boderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderRadius: 10,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContents: 'center',
    height: 800,
  },
});

export default App;
